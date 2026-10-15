import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-[960px]",
    default: "max-w-[1140px]",
    wide: "max-w-[1800px]",
  }[size];

  return (
    <div className={`container mx-auto px-4 md:px-[15px] ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
}
