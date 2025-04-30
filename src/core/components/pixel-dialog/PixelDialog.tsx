import { ArrowDownAnimated } from "../arrow-down-animated/ArrowDownAnimated";
import { TextAnimated } from "../texts/TextAnimated";
import { PixelDialogContainer } from "./PixelDialogContainer";

type PixelDialogProps = {
  title?: string;
  text: string;
  targetId?: string;
  type?: DialogType;
  className?: string;
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
}: PixelDialogProps) => {
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

  return (
    <PixelDialogContainer
      thickness="7px"
      color={baseColor}
      targetId={targetId}
      className={`min-w-xs max-w-2xs ${className}`}
    >
      <div className="flex w-full flex-col items-start justify-center">
        <div className="px-4 pt-4 min-h-14">
          {title && <h1 className="text-2xl font-bold">{title}</h1>}
          <TextAnimated text={text} />
        </div>
        <div className="w-full flex justify-end p-2">
          <ArrowDownAnimated />
        </div>
      </div>
    </PixelDialogContainer>
  );
};
