"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <Link
      href={href}
      style={
        path.startsWith("/community")
          ? {
              background: "linear-gradient(90deg, #ff8a05, #f9b331",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }
          : undefined
      }
    >
      {children}
    </Link>
  );
}
