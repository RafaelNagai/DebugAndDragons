import { useEffect, useState } from "react";

type TextAnimatedProps = {
  text: string;
  className?: string;
  onFinished?: () => void;
};

export const TextAnimated = ({
  text,
  className,
  onFinished: onComplete,
}: TextAnimatedProps) => {
  const [textState, setTextState] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTextState(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
        onComplete?.();
      }
    }, 100);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        clearInterval(intervalId);
        setTextState(text);
        onComplete?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [text]);

  return <p className={className}>{textState}</p>;
};
