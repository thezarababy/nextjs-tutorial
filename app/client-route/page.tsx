"use client";
import { clientSideFunction } from "@/utils/client-utils";
export default function ClientRoute() {
  const result = clientSideFunction();
  return <div>This is a client route page
    <p>{result}</p>
  </div>;
}
