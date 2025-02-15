"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function Header({
  href,
  children,
  ...rest
}: PropsWithChildren<LinkProps>) {
  const pathname = usePathname();

  return (
    <li
      className={
        "p-1 " +
        (pathname == href
          ? "text-gray-900 dark:text-gray-100 "
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 ")
      }
    >
      <Link href={href} {...rest}>
        {children}
      </Link>
    </li>
  );
}
