import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
  titleClassName?: string;
  badgeClassName?: string;
  descriptionClassName?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  theme = "dark",
  className = "",
  titleClassName = "",
  badgeClassName = "",
  descriptionClassName = "",
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  const isLight = theme === "light";

  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={`mb-[30px] md:mb-[40px] ${alignClasses} ${className}`}>
      {badge && (
        <h6
          className={`uppercase font-medium tracking-wide mb-2 inline-block pb-1 text-[13px] font-sans ${
            isLight
              ? "text-white border-b-2 border-white"
              : "text-[#0A080C] border-b-2 border-black"
          } ${badgeClassName}`}
        >
          {badge}
        </h6>
      )}

      <HeadingTag
        className={`text-[32px] md:text-[40px] font-medium leading-tight mt-2 font-sans ${
          isLight ? "text-white" : "text-[#0A080C]"
        } ${titleClassName}`}
      >
        {title}
      </HeadingTag>

      {description && (
        <p
          className={`mt-4 text-[15px] md:text-[17px] leading-[28px] font-light font-sans max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          } ${isLight ? "text-white/90" : "text-gray-600"} ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
