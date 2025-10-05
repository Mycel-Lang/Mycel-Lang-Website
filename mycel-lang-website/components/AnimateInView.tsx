"use client";

import React, { useRef, useEffect, useState } from "react";

interface AnimateInViewProps {
  children: React.ReactNode;
  animationClasses?: string;
  threshold?: number;
  delay?: string;
}

export function AnimateInView({
  children,
  animationClasses = "animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out",
  threshold = 0.1,
  delay = "",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, isVisible]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClasses : "opacity-0"} ${delay} w-full flex flex-col items-center justify-center`}
    >
      {children}
    </div>
  );
}
