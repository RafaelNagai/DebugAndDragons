import { useState } from "react";
import "./CharacterSprite.css";

type CharacterSpriteProps = {
  idle: string;
  attack: string;
  damaged: string;
  dead: string;
  className?: string;
  direction?: SpriteDirection;
  id?: string;
};

export enum SpriteDirection {
  right,
  left,
}

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
  direction = SpriteDirection.right,
  id,
}: CharacterSpriteProps) => {
  const [sprite, setSprite] = useState<SpriteState>(SpriteState.idle);

  const showImage = (state: SpriteState) => (sprite === state ? "" : "hidden");
  const directionStyle =
    direction === SpriteDirection.right ? "" : "scale-x-[-1]";

  return (
    <div className={`character-sprite ${className}`} id={id}>
      <img
        src={idle}
        alt="Idle Character"
        className={`character-sprite--idle ${showImage(
          SpriteState.idle
        )} ${directionStyle}`}
      />
      <img
        src={attack}
        alt="Idle Character"
        className={`character-sprite--attack ${showImage(
          SpriteState.attack
        )} ${directionStyle}`}
      />
      <img
        src={damaged}
        alt="Idle Character"
        className={`character-sprite--damaged ${showImage(
          SpriteState.damaged
        )} ${directionStyle}`}
      />
      <img
        src={dead}
        alt="Idle Character"
        className={`character-sprite--dead ${showImage(
          SpriteState.dead
        )} ${directionStyle}`}
      />
    </div>
  );
};
