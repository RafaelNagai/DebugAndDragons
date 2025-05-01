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
  idle = "idle",
  attack = "attack",
  damaged = "damaged",
  dead = "dead",
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
  const directionStyle =
    direction === SpriteDirection.right ? "" : "scale-x-[-1]";

  const img = () => {
    switch (currentSprite) {
      case SpriteState.idle:
        return idle;
      case SpriteState.attack:
        return attack;
      case SpriteState.damaged:
        return damaged;
      case SpriteState.dead:
        return dead;
    }
  };

  return (
    <img
      src={img()}
      alt="Idle Character"
      className={`character-sprite ${className} ${directionStyle}`}
      id={id}
    />
  );
};
