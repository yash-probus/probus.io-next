"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Container from "@/components/common/Container";

export default function SolutionHero() {
  const [text, setText] = useState("");
  const fullText = "Data Analytics";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 3000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/uploads/2025/06/solutionbg.jpg" 
          alt="Solutions Overview"
          fill
          sizes="100vw"
          className="object-cover hidden md:block"
          priority
        />
        <Image 
          src="/images/uploads/2025/06/solution-bgm.jpg" 
          alt="Solutions Overview Mobile"
          fill
          sizes="100vw"
          className="object-cover md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-black/5 z-10" />
      </div>
      
      {/* Breadcrumbs */}
      <div className="absolute top-[40px] left-0 w-full z-20">
        <Container className="text-left">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions" },
            ]}
            theme="light"
          />
        </Container>
      </div>
      
      <Container className="relative z-20">
        <h2 className="text-white text-[32px] md:text-[45px] font-bold font-sans tracking-wide">
          {text}<span className="animate-pulse">|</span>
        </h2>
      </Container>
    </section>
  );
}
