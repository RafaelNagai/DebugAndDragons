import { useEffect, useRef } from "react";
import "./ArrowDownAnimated.css";

export const ArrowDownAnimated = () => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef && iconRef.current) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          iconRef.current?.classList.toggle("arrow-down-animated--pressed");
          setTimeout(() => {
            iconRef.current?.classList.toggle("arrow-down-animated--pressed");
          }, 400);
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  return <div className="arrow-down-animated" ref={iconRef} />;
};
