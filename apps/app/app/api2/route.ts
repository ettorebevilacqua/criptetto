import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ text: 'Hello' });
}

// curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api
export async function POST(req: Request) {
  const data = await  req.json();
  return NextResponse.json({ok: 1, ...data});
}