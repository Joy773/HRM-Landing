import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get("auth_session")?.value;
  if (!sessionCookie) {
    return NextResponse.json({ user: null });
  }
  try {
    const session = JSON.parse(sessionCookie) as {
      email?: string;
      name?: string;
      picture?: string;
      provider?: string;
    };
    return NextResponse.json({
      user: {
        email: session.email ?? null,
        name: session.name ?? null,
        picture: session.picture ?? null,
        provider: session.provider ?? null,
      },
    });
  } catch {
    return NextResponse.json({ user: null });
  }
}
