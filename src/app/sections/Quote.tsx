"use client";
import React, { useEffect, useRef } from "react";

export const Quote = () => {
  const containerRef = useRef(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Split the text into parts that will be highlighted separately
  const textParts = [
    '"I may not have it all figured out at the start, ',
    'but I always figure it out before the end ."',
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position relative to the section
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      if (!sectionRect) return;

      // Calculate scroll progress through the section (0 to 1)
      const sectionHeight = sectionRef.current?.offsetHeight || 0;
      const viewportHeight = window.innerHeight;
      const scrollProgress =
        -sectionRect.top / (sectionHeight - viewportHeight);

      // Ensure progress is between 0 and 1
      const progress = Math.max(0, Math.min(1, scrollProgress));

      // Define thresholds for each text part
      const thresholds = [0.2, 0.4, 0.6]; // 20%, 40%, 60% through the section

      // Update each text part based on progress
      textRefs.current.forEach((ref, index) => {
        if (ref) {
          if (progress >= thresholds[index]) {
            ref.style.opacity = "1";
            ref.style.color = "rgba(255, 97, 29)";
          } else {
            ref.style.opacity = "0.3";
            ref.style.color = "rgba(255, 255, 255, 0.1)";
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-[180vh]">
      {" "}
      {/* Tall container to allow scrolling */}
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center bg-[#1a1a1a] font-medium text-3xl md:text-4xl xl:text-5xl p-4 md:pl-16 sticky top-0"
      >
        <div className="max-w-4xl">
          {textParts.map((part, index) => (
            <span
              key={index}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              className="transition-all duration-700 "
              style={{ opacity: 0.3, color: "rgba(214, 210, 189, 0.3)" }}
            >
              {part}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
