import { useEffect } from "react";
import {
  DialogType,
  PixelDialog,
} from "../../core/components/pixel-dialog/PixelDialog";
import { DialogSceneModel } from "./models/DialogSceneModel";

type DialogSceneProps = {
  data: DialogSceneModel;
  onNextScene: () => void;
};

export const DialogScene = ({ data, onNextScene }: DialogSceneProps) => {
  useEffect(() => {}, [data]);

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <PixelDialog
        targetId={data.targetId}
        title={data.title}
        text={data.text}
        type={data.type as DialogType}
        onSkip={onNextScene}
      />
      <div
        id="left"
        className="h-32 w-32 rounded bg-red-700 absolute bottom-0 left-0"
      ></div>
      <div
        id="middle"
        className="h-32 w-32 rounded bg-green-700 absolute bottom-0 left-[50%]"
      ></div>
      <div
        id="right"
        className="h-32 w-32 rounded bg-blue-700 absolute bottom-0 right-0"
      ></div>
    </div>
  );
};
