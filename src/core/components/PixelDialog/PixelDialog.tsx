import { ReactNode } from "react";
import { PixelContainer } from "../PixelContainer/PixelContainer";
import "./PixelDialog.css";

type PixelDialogProps = {
  thickness?: string;
  color?: string;
  side?: string;
  children: ReactNode;
};

export const PixelDialog = ({
  thickness,
  color,
  children,
  side = "left",
}: PixelDialogProps) => {
  const sideClass =
    side === "left" ? "pixel-dialog__root--left" : "pixel-dialog__root--right";
  return (
    <div className="pixel-dialog">
      <PixelContainer thickness={thickness} color={color}>
        {children}
      </PixelContainer>
      <div
        className={`pixel-dialog__root ${sideClass}`}
        style={
          {
            "--thickness": thickness,
            "--color": color,
          } as React.CSSProperties
        }
      ></div>
    </div>
  );
};
