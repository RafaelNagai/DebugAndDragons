import { useState } from "react";
import "./BaseCharacterSprite.css";

type BaseCharacterSpriteProps = {
  idle: string;
  attack: string;
  damaged: string;
  dead: string;
  className?: string;
  currentSprite?: SpriteState;
  direction?: SpriteDirection;
  id?: string;
};

export enum SpriteDirection {
  right,
  left,
}

export enum SpriteState {
  idle,
  attack,
  damaged,
  dead,
}

export const BaseCharacterSprite = ({
  currentSprite = SpriteState.idle,
  idle,
  attack,
  damaged,
  dead,
  className = "",
  direction = SpriteDirection.right,
  id,
}: BaseCharacterSpriteProps) => {
  const [sprite] = useState<SpriteState>(currentSprite);

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
