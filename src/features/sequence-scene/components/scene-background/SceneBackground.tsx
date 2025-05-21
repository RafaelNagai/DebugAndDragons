import React from "react";

type SceneBackgroundProps = {
  background: string | undefined;
  children: React.ReactNode;
};

export const SceneBackground = ({
  background,
  children,
}: SceneBackgroundProps) => {
  return (
    <div
      className="relative w-[100vw] h-[100vh] bg-bottom bg-cover"
      style={{
        backgroundImage: `url(backgrounds/${
          background ?? "field"
        }_background.webp)`,
      }}
    >
      {children}
    </div>
  );
};
