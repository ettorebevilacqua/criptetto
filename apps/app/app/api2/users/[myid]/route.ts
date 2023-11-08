import { NextResponse } from "next/server";


// curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api
// curl localhost:3000/api/users/2
export async function GET(req: Request, context: any) {
  const {params} = context
  return NextResponse.json({par: params});
}