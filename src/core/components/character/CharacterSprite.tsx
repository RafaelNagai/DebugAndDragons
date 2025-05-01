import {
  BaseCharacterSprite,
  SpriteDirection,
  SpriteState,
} from "./BaseCharacterSprite";
import "./CharacterSprite.css";

type CharacterSpriteProps = {
  id: string;
  sprite: string;
  currentSprite?: SpriteState;
  size?: SpriteSize;
  direction?: SpriteDirection;
  className?: string;
};

enum SpriteSize {
  big = "big",
  medium = "medium",
  small = "small",
}

export const CharacterSprite = ({
  id,
  sprite,
  currentSprite = SpriteState.idle,
  size = SpriteSize.medium,
  direction = SpriteDirection.right,
  className,
}: CharacterSpriteProps) => {
  let allClassNames = "";

  switch (size) {
    case SpriteSize.small:
      allClassNames += " sprite--small";
      break;
    case SpriteSize.medium:
      allClassNames += " sprite--medium";
      break;
    case SpriteSize.big:
      allClassNames += " sprite--big";
      break;
  }

  return (
    <BaseCharacterSprite
      idle={`/characters/${sprite}/${sprite}-idle.png`}
      attack={`/characters/${sprite}/${sprite}-attack.png`}
      damaged={`/characters/${sprite}/${sprite}-damaged.png`}
      dead={`/characters/${sprite}/${sprite}-die.png`}
      className={`${allClassNames} ${className}`}
      currentSprite={currentSprite}
      direction={direction}
      id={id}
    />
  );
};
