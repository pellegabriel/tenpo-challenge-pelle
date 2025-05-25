'use client'

import { useEffect, useRef } from "react";

interface SpotlightButtonProps {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SpotlightButton = ({ 
  label = "Get Started", 
  className = "",
  size = 'md'
}: SpotlightButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 md:px-8 md:py-3 text-base md:text-lg',
    lg: 'px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl'
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return;
      
      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;
      
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const button = btnRef.current;
    if (button) {
      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <button 
      className={`${sizeClasses[size]} font-medium bg-[var(--primary)] text-black w-fit transition-all shadow-[3px_3px_0px_#942db2] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ${className}`}
    >
      {label}
    </button>
  );
};

export default SpotlightButton; 