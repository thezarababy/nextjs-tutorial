"use client";
import { useState } from "react";

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Batman");
  return (
    <div>
      <h1>Client Component One</h1>

      {children}
    </div>
  );
};

export default ClientComponentOne;
