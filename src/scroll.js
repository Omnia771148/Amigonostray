// ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function Scroll() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Instantly jump to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}