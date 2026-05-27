import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { name, email, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const [existing] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existing.length > 0) {
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 400 }
    );
  }

  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}