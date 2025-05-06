import { useRef, useCallback } from "react";

function useDebounce<T extends (...args: any[]) => void>(
  fn: T | undefined,
  delay = 300
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (!fn) return;

      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFn;
}

export default useDebounce;
