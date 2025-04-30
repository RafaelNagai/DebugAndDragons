import { ReactNode, useEffect, useRef, useState } from "react";
import { PixelContainer } from "../pixel-container/PixelContainer";
import "./PixelDialogContainer.css";

type PixelDialogContainerProps = {
  thickness?: string;
  color?: string;
  side?: SideScreen;
  targetId?: string;
  className?: string;
  children: ReactNode;
};

enum SideScreen {
  LEFT = "left",
  RIGHT = "right",
}

export const PixelDialogContainer = ({
  thickness,
  color,
  children,
  targetId,
  side,
  className,
}: PixelDialogContainerProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sideScreen, setSideScreen] = useState(side ?? SideScreen.LEFT);
  const sideClass =
    sideScreen === SideScreen.LEFT
      ? "pixel-dialog__root--left"
      : "pixel-dialog__root--right";

  useEffect(() => {
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement && dialogRef.current) {
        const rect = targetElement.getBoundingClientRect();
        const dialogElement = dialogRef.current;
        if (rect.left < window.innerWidth / 2) {
          setSideScreen(SideScreen.LEFT);
        } else {
          setSideScreen(SideScreen.RIGHT);
        }
        if (dialogElement) {
          let leftStyle = rect.left < window.innerWidth / 2 ? "left" : "right";
          let leftStyleValue =
            rect.left < window.innerWidth / 2
              ? rect.left +
                (rect.width / 2) * (rect.left < window.innerWidth / 2 ? 1 : -1)
              : window.innerWidth - rect.right + rect.width / 2;
          dialogElement.setAttribute(
            "style",
            `bottom: ${window.innerHeight - rect.y}px; 
            ${leftStyle}: ${leftStyleValue}px;`
          );
        }
      }
    }
    setIsOpen(true);
  }, [targetId, isOpen]);

  return (
    <div
      ref={dialogRef}
      className={`pixel-dialog--float ${targetId ? "fixed" : "flex"} ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`pixel-dialog ${className}`}
        style={
          {
            "--thickness": thickness,
            "--color": color,
          } as React.CSSProperties
        }
      >
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
    </div>
  );
};
