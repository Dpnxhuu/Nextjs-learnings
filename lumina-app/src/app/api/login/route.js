import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { email, password } = await request.json();

  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (rows.length === 0) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  const user = rows[0];

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid password" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { message: "Login successful", user: { id: user.id, name: user.name, email: user.email } },
    { status: 200 }
  );
}