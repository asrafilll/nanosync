import Link from "next/link";

export const NavItem = ({ title, link }) => {
  return (
    <Link
      href={link}
      className=" text-white hover:text-slate-400"
      aria-current="page"
    >
      {title}
    </Link>
  );
};
