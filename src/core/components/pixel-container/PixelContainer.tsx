import { ReactNode } from "react";
import "./PixelContainer.css";

type PixelContainerProps = {
  thickness?: string;
  color?: string;
  children: ReactNode;
};

export const PixelContainer = ({
  color,
  thickness,
  children,
}: PixelContainerProps) => {
  return (
    <div
      className="pixel-box"
      style={
        {
          "--thickness": thickness,
          "--color": color,
        } as React.CSSProperties
      }
    >
      <div className="pixel-box__container">{children}</div>
    </div>
  );
};
