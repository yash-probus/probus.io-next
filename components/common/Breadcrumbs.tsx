import Link from "next/link";
import React from "react";
import { BreadcrumbItem } from "@/types/common";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark" | "blue";
  separator?: React.ReactNode;
  className?: string;
}

export default function Breadcrumbs({
  items,
  theme = "light",
  separator = ">",
  className = "",
}: BreadcrumbsProps) {
  const themeClasses = {
    light: {
      text: "text-white",
      link: "text-white hover:underline",
      separator: "text-white/80",
      active: "text-white font-semibold",
    },
    dark: {
      text: "text-[#333333]",
      link: "text-[#333333] hover:text-[#097DF5]",
      separator: "text-[#777777]",
      active: "text-black font-semibold",
    },
    blue: {
      text: "text-white",
      link: "text-white hover:text-[#0795F8] transition-colors",
      separator: "text-white/70",
      active: "text-white font-semibold",
    },
  }[theme];

  return (
    <nav aria-label="Breadcrumb" className={`font-sans text-[13px] md:text-[14px] ${className}`}>
      <ol className="flex items-center flex-wrap gap-2 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className={themeClasses.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={themeClasses.active}>{item.label}</span>
              )}

              {!isLast && (
                <span className={`text-[11px] select-none ${themeClasses.separator}`} aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
