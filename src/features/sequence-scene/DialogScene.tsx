import {
  DialogType,
  PixelDialog,
} from "../../core/components/pixel-dialog/PixelDialog";
import { DialogSceneModel } from "./models/DialogSceneModel";
import { CharacterSprite } from "../../core/components/character/CharacterSprite";
import { SpriteDirection } from "../../core/components/character/BaseCharacterSprite";

type DialogSceneProps = {
  data: DialogSceneModel;
  onNextScene: () => void;
};

export const DialogScene = ({ data, onNextScene }: DialogSceneProps) => {
  return (
    <div
      className="relative w-[100vw] h-[100vh] bg-bottom bg-cover"
      style={{
        backgroundImage: `url(backgrounds/${
          data.background ?? "field"
        }_background.png)`,
      }}
    >
      <PixelDialog
        key={data.id}
        targetId={data.targetId}
        title={data.title}
        text={data.text}
        type={data.type as DialogType}
        onSkip={onNextScene}
      />
      {data.left && (
        <CharacterSprite
          id={data.left.id}
          sprite={data.left.sprite}
          currentState={data.left.state}
          className="absolute bottom-[5%] left-[15%]"
        />
      )}
      {data.middle && (
        <CharacterSprite
          id={data.middle.id}
          sprite={data.middle.sprite}
          currentState={data.middle.state}
          className="absolute bottom-[5%] left-[40%]"
        />
      )}
      {data.right && (
        <CharacterSprite
          id={data.right.id}
          sprite={data.right.sprite}
          direction={SpriteDirection.left}
          currentState={data.right.state}
          className="absolute bottom-[5%] right-[15%]"
        />
      )}
    </div>
  );
};
