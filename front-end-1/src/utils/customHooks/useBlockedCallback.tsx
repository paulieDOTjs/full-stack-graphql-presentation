import { useCallback, useRef } from "react";

export function useBlockedCallback<T extends any[]>(
  cb: (...args: T) => void | Promise<void>
): (...args: T) => Promise<void> {
  const inProgress = useRef(false);

  const func = useCallback(
    async (...args: T) => {
      if (inProgress.current === true) return;
      try {
        inProgress.current = true;
        await cb(...args);
      } catch (err) {
        console.error({ err });
      } finally {
        inProgress.current = false;
      }
    },
    [cb]
  );

  return func;
}
