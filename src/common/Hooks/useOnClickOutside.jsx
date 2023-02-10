import { useEffect } from "react";
// hook that can help us close popup when clicked outside
export const useOnClickOutside = (ref, secondRef, handleClick) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        ref.current &&
        !secondRef.current.contains(event.target) &&
        !ref.current.contains(event.target)
      ) {
        handleClick(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, secondRef, handleClick]);
};