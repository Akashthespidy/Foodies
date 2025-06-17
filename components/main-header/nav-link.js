"use client";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
import Link from "next/link";
//import { usePathname } from "next/navigation";
export default function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? `${classes.Link} ${classes.active}`
          : classes.Link
      }
    >
      {children}
    </Link>
  );
}
