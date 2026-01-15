import fs from "fs";

const ServerComponentTwo = () => {
  fs.readFileSync("components/server-component-one.tsx", "utf-8");
  return (
    <div>
      <h1>Server Component Two</h1>
    </div>
  );
};

export default ServerComponentTwo;
