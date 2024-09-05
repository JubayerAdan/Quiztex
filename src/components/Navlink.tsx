"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PropTypes {
  href: string;
  exact: boolean;
  children: any;
  className: string;
}

export const NavLink = (
  { href, exact, children, className }: PropTypes,
  props: any
) => {
  const pathname = usePathname();
  const active = " font-bold bg-neutral hover:bg-[#4169E1] hover:text-white text-white";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  // Add or remove styles based on isActive condition
  let linkProps = {
    ...props,
    className: `${className || ""}${isActive ? active : ""}`,
  };

  return (
    <Link
      onClick={() => {
        linkProps = {
          ...props,
          className: `${className || ""}${isActive ? active : ""}`,
        };
      }}
      href={href}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default NavLink;
