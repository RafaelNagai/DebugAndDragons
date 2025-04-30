import { useEffect, useState } from "react";

type TextAnimatedProps = {
  text: string;
  className?: string;
};

export const TextAnimated = ({ text, className }: TextAnimatedProps) => {
  const [textState, setTextState] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTextState(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 100);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        clearInterval(intervalId);
        setTextState(text);
      }
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return <p className={className}>{textState}</p>;
};
