import { useState } from "react";
import "./CharacterSprite.css";

type CharacterSpriteProps = {
  idle: string;
  attack: string;
  damaged: string;
  dead: string;
  className?: string;
  id?: string;
};

enum SpriteState {
  idle,
  attack,
  damaged,
  dead,
}

export const CharacterSprite = ({
  idle,
  attack,
  damaged,
  dead,
  className = "",
  id,
}: CharacterSpriteProps) => {
  const [sprite, setSprite] = useState<SpriteState>(SpriteState.idle);

  const showImage = (state: SpriteState) => (sprite === state ? "" : "hidden");

  return (
    <div className={`character-sprite ${className}`} id={id}>
      <img
        src={idle}
        alt="Idle Character"
        className={`character-sprite--idle ${showImage(SpriteState.idle)}`}
      />
      <img
        src={attack}
        alt="Idle Character"
        className={`character-sprite--attack ${showImage(SpriteState.attack)}`}
      />
      <img
        src={damaged}
        alt="Idle Character"
        className={`character-sprite--damaged ${showImage(
          SpriteState.damaged
        )}`}
      />
      <img
        src={dead}
        alt="Idle Character"
        className={`character-sprite--dead ${showImage(SpriteState.dead)}`}
      />
    </div>
  );
};
