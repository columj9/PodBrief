import { redirect } from "@remix-run/node";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "@remix-run/react";
import { supabase } from "~/utils/supabase.server";
import { createUserSession } from "~/utils/session.server";
import type { LoaderFunctionArgs } from "@remix-run/node";

// This will handle the server-side part (if code parameter is present)
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  console.log("Full callback URL:", url.toString());
  console.log("Search params:", Object.fromEntries(url.searchParams));
  
  // Get the code from the URL
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/dashboard";

  // If we have a code, exchange it for a session
  if (code) {
    try {
      console.log("Attempting to exchange code for session...");
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Exchange error:", error);
        return redirect(`/login?error=${encodeURIComponent(error.message)}`);
      }

      if (!data?.session) {
        console.error("No session in exchange response");
        return redirect("/login?error=No session created");
      }

      console.log("Session created successfully");
      return createUserSession(data.session.access_token, next);
    } catch (error) {
      console.error("Auth callback error:", error);
      return redirect("/login?error=Authentication failed");
    }
  }

  // If there's no code, return the component to handle hash fragment
  return {};
}

// This component will handle the client-side part (for access_token in hash)
export default function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") || "/dashboard";

  useEffect(() => {
    // Process hash fragment on client side
    const hash = window.location.hash.substring(1);
    if (hash) {
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      
      console.log("Found access_token in fragment");
      
      if (accessToken) {
        // Create a form and post to our server to create a session
        const form = document.createElement("form");
        form.method = "post";
        form.action = "/auth/session";
        
        const tokenInput = document.createElement("input");
        tokenInput.type = "hidden";
        tokenInput.name = "access_token";
        tokenInput.value = accessToken;
        
        const nextInput = document.createElement("input");
        nextInput.type = "hidden";
        nextInput.name = "next";
        nextInput.value = next;
        
        form.appendChild(tokenInput);
        form.appendChild(nextInput);
        document.body.appendChild(form);
        form.submit();
        return;
      }
    }

    // If no access token in hash, redirect back to login
    navigate("/login?error=No authentication token provided");
  }, [navigate, next]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Processing authentication...</h2>
        <p className="text-gray-600 dark:text-gray-400">Please wait while we complete your sign-in.</p>
      </div>
    </div>
  );
} 