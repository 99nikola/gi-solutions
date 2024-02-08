import { useCallback, useRef } from "react";

export default function useBodyLock() {
  const focusedElementRef = useRef<HTMLElement | null>(null);
  const scrollPositionRef = useRef<{ x: number; y: number }>();

  const lockBody = useCallback(() => {
    focusedElementRef.current = document.activeElement as HTMLElement;
    const width = document.body.clientWidth;
    scrollPositionRef.current = { x: window.scrollX, y: window.scrollY };

    const hasVerticalScrollBar =
      window.innerWidth > document.documentElement.clientWidth;
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = hasVerticalScrollBar ? "scroll" : "";
    document.body.style.width = `${width}px`;
    document.body.style.position = "fixed";
  }, []);

  const unlockBody = useCallback(() => {
    document.body.style.overflowX = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";
    document.body.style.position = "";

    focusedElementRef.current?.focus();
    if (scrollPositionRef.current) {
      window.scrollTo(scrollPositionRef.current.x, scrollPositionRef.current.y);
    }
  }, []);

  return {
    lockBody,
    unlockBody,
  };
}
