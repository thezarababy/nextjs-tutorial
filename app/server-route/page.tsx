import { serverSideFunction } from "@/utils/server-utils";
export default function ServerRoute() {
  const result = serverSideFunction();
  return <div>This is a server route page</div>;
}
