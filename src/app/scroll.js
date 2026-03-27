'use client';
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function Scroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Instantly jump to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}