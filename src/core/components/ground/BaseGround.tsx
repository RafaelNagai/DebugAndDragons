import "./BaseGround.css";

export enum GroundType {
  grass = "grass",
}

type BaseGroundProps = {
  type?: GroundType;
  className?: string;
};

export const BaseGround = ({
  type = GroundType.grass,
  className,
}: BaseGroundProps) => {
  return (
    <div
      className={`ground ${className}`}
      style={{
        backgroundImage: `url(grounds/${type}_ground.png)`,
      }}
    ></div>
  );
};
