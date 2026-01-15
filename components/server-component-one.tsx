import fs from "fs";
import ClientComponentOne from "./client-component-one";

const ServerComponentOne = () => {
  fs.readFileSync("components/server-component-one.tsx", "utf-8");
  return (
    <div>
      <h1>Server Component One</h1>
      <ClientComponentOne />
    </div>
  );
};

export default ServerComponentOne;
