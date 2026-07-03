import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router doesn't reset scroll position on navigation the way a
 * traditional multi-page site does — the new route renders wherever
 * the previous page happened to be scrolled to.
 *
 * This component has no UI. It just watches the current pathname and
 * scrolls to top whenever it changes. Render it once, inside
 * <BrowserRouter>, anywhere in the tree (it doesn't need to wrap anything).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}