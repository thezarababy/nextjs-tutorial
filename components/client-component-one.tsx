"use client";
import { useState } from "react";

const ClientComponentOne = () => {
  const [name, setName] = useState("Batman");
  return (
    <div>
      <h1>Client Component One</h1>
    </div>
  );
};

export default ClientComponentOne;
