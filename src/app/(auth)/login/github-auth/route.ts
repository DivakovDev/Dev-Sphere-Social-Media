import { github } from "@/auth"; // Replace with your GitHub auth configuration
import { generateCodeVerifier, generateState } from "arctic"; // Import from your authentication utility library
import { profile } from "console";
import { cookies } from "next/headers";

export async function GET() {
  // Generate a unique state and code verifier for the OAuth2 flow
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  // Create an authorization URL for GitHub's OAuth2
  const url = await github.createAuthorizationURL(state, {scopes:["profile", "email"]}
  );

  // Set cookies to store the state and code verifier securely for validation later
  cookies().set("state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });

  cookies().set("code_verifier", codeVerifier, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });

  // Redirect the user to the GitHub authorization page
  return Response.redirect(url);
}
