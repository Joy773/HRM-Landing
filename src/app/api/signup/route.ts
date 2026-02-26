import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

const MOCK_DATA_PATH = path.join(process.cwd(), "mockData.json");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password, phone, countryCode, countryDial } = body as {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      phone?: string;
      countryCode?: string;
      countryDial?: string;
    };

    const entry = {
      id: randomUUID(),
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      email: email ?? "",
      password: password ?? "",
      phone: phone ?? "",
      countryCode: countryCode ?? "",
      countryDial: countryDial ?? "",
      createdAt: new Date().toISOString(),
    };

    let data: { signups: typeof entry[] };
    try {
      const raw = await fs.readFile(MOCK_DATA_PATH, "utf-8");
      data = JSON.parse(raw);
    } catch {
      data = { signups: [] };
    }

    if (!Array.isArray(data.signups)) data.signups = [];

    const normalizedNewEmail = (entry.email ?? "").toLowerCase().trim();
    const normalizedNewPhone = (entry.phone ?? "").replace(/\D/g, "").trim();

    const alreadyExists = data.signups.some((s) => {
      const sameEmail = (s.email ?? "").toLowerCase().trim() === normalizedNewEmail;
      const samePhone = (s.phone ?? "").replace(/\D/g, "").trim() === normalizedNewPhone;
      return sameEmail || (normalizedNewPhone && samePhone);
    });

    if (alreadyExists) {
      return NextResponse.json({ error: "Account Already Exists" }, { status: 409 });
    }

    data.signups.push(entry);

    await fs.writeFile(MOCK_DATA_PATH, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ ok: true, id: entry.id });
  } catch (err) {
    console.error("Signup save error:", err);
    return NextResponse.json({ error: "Failed to save signup" }, { status: 500 });
  }
}
