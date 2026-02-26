import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const MOCK_DATA_PATH = path.join(process.cwd(), "mockData.json");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body as { email?: string; password?: string };

    const trimmedEmail = (email ?? "").trim().toLowerCase();
    const trimmedPassword = (password ?? "").trim();

    if (!trimmedEmail || !trimmedPassword) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    let data: { signups?: { email?: string; password?: string }[] };
    try {
      const raw = await fs.readFile(MOCK_DATA_PATH, "utf-8");
      data = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: "User doesn't exist" }, { status: 404 });
    }

    const signups = Array.isArray(data.signups) ? data.signups : [];
    const user = signups.find(
      (s) => (s.email ?? "").trim().toLowerCase() === trimmedEmail
    );

    if (!user) {
      return NextResponse.json({ error: "User doesn't exist" }, { status: 404 });
    }

    const storedPassword = (user.password ?? "").trim();
    if (storedPassword !== trimmedPassword) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const firstName = (user as { firstName?: string }).firstName ?? "";
    const lastName = (user as { lastName?: string }).lastName ?? "";
    const name = [firstName, lastName].filter(Boolean).join(" ") || trimmedEmail;

    const session = {
      email: user.email ?? trimmedEmail,
      name,
      picture: "",
      provider: "email",
    };

    const response = NextResponse.json({ ok: true });
    const isProd = process.env.NODE_ENV === "production";
    response.cookies.set("auth_session", JSON.stringify(session), {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
