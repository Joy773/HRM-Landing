import { NextRequest, NextResponse } from "next/server";

function decodeJwtPayload(token: string): { email?: string; name?: string; picture?: string } {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return {};
    const payload = parts[1];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = Buffer.from(base64, "base64").toString("utf-8");
    return JSON.parse(json) as { email?: string; name?: string; picture?: string };
  } catch {
    return {};
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const origin = request.nextUrl.origin;
  const redirectUri = `${origin}/api/auth/callback/google`;

  if (error) {
    return NextResponse.redirect(new URL("/?error=google_denied", origin));
  }

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return NextResponse.redirect(new URL("/?error=google_config", origin));
  }

  const body = new URLSearchParams({
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  });

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    console.error("Google token exchange failed:", err);
    return NextResponse.redirect(new URL("/?error=google_token", origin));
  }

  const tokens = (await tokenRes.json()) as { id_token?: string };
  const idToken = tokens.id_token;
  if (!idToken) {
    return NextResponse.redirect(new URL("/?error=google_token", origin));
  }

  const payload = decodeJwtPayload(idToken);
  const session = {
    email: payload.email ?? "",
    name: payload.name ?? "",
    picture: payload.picture ?? "",
    provider: "google",
  };

  const response = NextResponse.redirect(new URL("/?signed_in=1", origin));
  const isProd = process.env.NODE_ENV === "production";
  response.cookies.set("auth_session", JSON.stringify(session), {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
