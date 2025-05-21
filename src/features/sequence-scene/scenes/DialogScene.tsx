import {
  DialogType,
  PixelDialog,
} from "../../../core/components/pixel-dialog/PixelDialog";
import { DialogSceneModel } from "../models/DialogSceneModel";
import { CharacterSprite } from "../../../core/components/character/CharacterSprite";
import { SpriteDirection } from "../../../core/components/character/BaseCharacterSprite";
import "./Scene.css";
import { SceneBackground } from "../components/scene-background/SceneBackground";

type DialogSceneProps = {
  data: DialogSceneModel;
  onNextScene: () => void;
};

export const DialogScene = ({ data, onNextScene }: DialogSceneProps) => {
  return (
    <SceneBackground background={data.background}>
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
          size={data.left.size}
          className="character-left"
        />
      )}
      {data.middle && (
        <CharacterSprite
          id={data.middle.id}
          sprite={data.middle.sprite}
          currentState={data.middle.state}
          size={data.middle.size}
          className="character-center"
        />
      )}
      {data.right && (
        <CharacterSprite
          id={data.right.id}
          sprite={data.right.sprite}
          direction={SpriteDirection.left}
          currentState={data.right.state}
          size={data.right.size}
          className="character-right"
        />
      )}
    </SceneBackground>
  );
};
