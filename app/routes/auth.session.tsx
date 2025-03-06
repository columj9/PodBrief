import { redirect } from "@remix-run/node";
import { createUserSession } from "~/utils/session.server";
import type { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const accessToken = formData.get("access_token") as string;
  const next = formData.get("next") as string || "/dashboard";

  if (!accessToken) {
    return redirect("/login?error=No access token provided");
  }

  // Create a user session with the access token
  return createUserSession(accessToken, next);
}

// This component will never be rendered, but is required
export default function AuthSession() {
  return null;
} 