type CharacterSpriteProps = {
  idle: string;
  attack: string;
  damaged: string;
  dead: string;
};

export const CharacterSprite = ({
  idle,
  attack,
  damaged,
  dead,
}: CharacterSpriteProps) => {
  return (
    <div className="character-sprite">
      <img src={idle} alt="Idle Character" className="character-sprite--idle" />
      <img
        src={attack}
        alt="Idle Character"
        className="character-sprite--attack"
      />
      <img
        src={damaged}
        alt="Idle Character"
        className="character-sprite--damaged"
      />
      <img src={dead} alt="Idle Character" className="character-sprite--die" />
    </div>
  );
};
