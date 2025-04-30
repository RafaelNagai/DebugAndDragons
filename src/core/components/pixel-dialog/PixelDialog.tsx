import { useEffect, useState } from "react";
import { ArrowDownAnimated } from "../arrow-down-animated/ArrowDownAnimated";
import { TextAnimated } from "../texts/TextAnimated";
import { PixelDialogContainer } from "./PixelDialogContainer";
import "./PixelDialog.css";

type PixelDialogProps = {
  title?: string;
  text: string;
  targetId?: string;
  type?: DialogType;
  className?: string;
  onComplete?: () => void;
};

export enum DialogType {
  main,
  secondary,
}

export const PixelDialog = ({
  title,
  text,
  targetId,
  type,
  className,
  onComplete,
}: PixelDialogProps) => {
  const [textDone, setTextDone] = useState(false);

  const rootStyles = getComputedStyle(document.documentElement);
  let baseColor = "";
  switch (type) {
    case DialogType.main:
      baseColor = rootStyles.getPropertyValue("--color-main-dialog").trim();
      break;
    case DialogType.secondary:
      baseColor = rootStyles
        .getPropertyValue("--color-secondary-dialog")
        .trim();
      break;
    default:
      baseColor = rootStyles.getPropertyValue("--color-main-dialog").trim();
      break;
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        if (textDone) onComplete?.();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [textDone]);

  const onTextFinished = () => {
    setTextDone(true);
  };

  return (
    <PixelDialogContainer
      thickness="7px"
      color={baseColor}
      targetId={targetId}
      className={`pixel-dialog ${className}`}
    >
      <div className="pixel-dialog__container">
        <div className="pixel-dialog__content">
          {title && <h1 className="pixel-dialog__title">{title}</h1>}
          <TextAnimated text={text} onFinished={onTextFinished} />
        </div>
        <div className="pixel-dialog__footer">
          <ArrowDownAnimated />
        </div>
      </div>
    </PixelDialogContainer>
  );
};
