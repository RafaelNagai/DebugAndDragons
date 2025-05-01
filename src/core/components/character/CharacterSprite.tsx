import { BaseGround, GroundType } from "../ground/BaseGround";
import {
  BaseCharacterSprite,
  SpriteDirection,
  SpriteState,
} from "./BaseCharacterSprite";
import "./CharacterSprite.css";

type CharacterSpriteProps = {
  id: string;
  sprite: string;
  currentState?: SpriteState;
  size?: SpriteSize;
  direction?: SpriteDirection;
  className?: string;
};

export enum SpriteSize {
  big = "big",
  medium = "medium",
  small = "small",
}

export const CharacterSprite = ({
  id,
  sprite,
  currentState = SpriteState.idle,
  size = SpriteSize.medium,
  direction = SpriteDirection.right,
  className,
}: CharacterSpriteProps) => {
  return (
    <BaseCharacterSprite
      idle={`/characters/${sprite}/${sprite}-idle.png`}
      attack={`/characters/${sprite}/${sprite}-attack.png`}
      damaged={`/characters/${sprite}/${sprite}-damaged.png`}
      dead={`/characters/${sprite}/${sprite}-die.png`}
      className={`sprite--${size} ${className}`}
      currentSprite={currentState}
      direction={direction}
      id={id}
    />
  );
};
