import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));
  const headersList = await headers();
  console.log(headersList.get("authorization"));
  return new Response("Hello, Next.js!");
}
