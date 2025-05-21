import { SpriteDirection } from "../../../core/components/character/BaseCharacterSprite";
import { CharacterSprite } from "../../../core/components/character/CharacterSprite";
import { SceneBackground } from "../components/scene-background/SceneBackground";
import { BattleSceneModel } from "../models/BattleSceneModel";
import "./Scene.css";

type BattleSceneProps = {
  data: BattleSceneModel;
  onNextScene: () => void;
};

export const BattleScene = ({ data, onNextScene }: BattleSceneProps) => {
  return (
    <SceneBackground background="field">
      <CharacterSprite
        id="main-character"
        sprite="warrior"
        className="character-left"
      />

      <CharacterSprite
        id="enemy-character"
        sprite={data.enemy.sprite}
        direction={SpriteDirection.left}
        className="character-right"
      />
    </SceneBackground>
  );
};
