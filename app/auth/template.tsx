"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Login", href: "/auth/login" },
  { name: "Register", href: "/auth/register" },
  { name: "Forgot Password", href: "/auth/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/auth");
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
