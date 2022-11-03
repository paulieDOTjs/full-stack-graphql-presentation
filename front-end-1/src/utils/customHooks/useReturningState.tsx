import { useEffect, useState } from "react";

export function useReturningState<t>(
  initialValue: t,
  timeInSeconds = 3
): [t, (setState: t) => void] {
  const [timedState, setTimedState] = useState<t>(initialValue);

  useEffect(() => {
    if (timedState === initialValue) return;

    const timeout = setTimeout(() => {
      setTimedState(initialValue);
    }, timeInSeconds * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [initialValue, timeInSeconds, timedState]);

  return [timedState, setTimedState];
}
