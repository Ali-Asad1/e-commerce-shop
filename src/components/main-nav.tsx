"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CategoryType } from "@/types";

import { cn } from "@/utils/utils";

interface MainNavProps {
  data: CategoryType[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-2 lg:space-x-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
export default MainNav;
