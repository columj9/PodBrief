import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { supabase } from "./supabase.server";

// Configure session storage
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "sb_auth",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET || 'default-secret'], // You should set SESSION_SECRET in .env
    secure: process.env.NODE_ENV === "production",
  },
});

// Get session from request
export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

// Create new session with Supabase token
export async function createUserSession(token: string, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set("token", token);
  
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

// Get user from session
export async function getUserFromSession(request: Request) {
  const session = await getSession(request);
  const token = session.get("token");

  if (!token) return null;

  const { data: { user }, error } = await supabase.auth.getUser(token);
  
  if (error || !user) return null;
  
  return user;
}

// Require user authentication
export async function requireUser(request: Request, redirectTo: string = "/login") {
  const user = await getUserFromSession(request);
  if (!user) {
    throw redirect(redirectTo);
  }
  return user;
}

// Log out user
export async function logout(request: Request) {
  const session = await getSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
} 