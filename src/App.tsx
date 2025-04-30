import {
  CharacterSprite,
  SpriteDirection,
} from "./core/components/character/CharacterSprite";
import { PixelDialog } from "./core/components/pixel-dialog/PixelDialog";

function App() {
  return (
    <div className="h-screen w-screen relative">
      <p>ABC</p>
      <PixelDialog thickness="7px" color="yellow">
        <div className="p-4">
          <h1>Pixel Dialog</h1>
          <p>This is a pixel dialog example.</p>
        </div>
      </PixelDialog>
      <PixelDialog thickness="7px" color="blue" targetId="pixel-dialog">
        <div className="p-4">
          <h1>Pixel Dialog</h1>
          <p>This is a pixel dialog example.</p>
        </div>
      </PixelDialog>
      <CharacterSprite
        idle={"/characters/warrior/warrior-idle.png"}
        attack={"/characters/warrior/warrior-attack.png"}
        damaged={"/characters/warrior/warrior-damaged.png"}
        dead={"/characters/warrior/warrior-die.png"}
        className="w-56 h-56 absolute bottom-0 left-0"
        id="pixel-dialog"
      />
      <PixelDialog thickness="7px" color="red" targetId="second-pixel-dialog">
        <div className="p-4">
          <h1>Pixel Dialog</h1>
          <p>This is a pixel dialog example.</p>
        </div>
      </PixelDialog>
      <CharacterSprite
        idle={"/characters/warrior/warrior-idle.png"}
        attack={"/characters/warrior/warrior-attack.png"}
        damaged={"/characters/warrior/warrior-damaged.png"}
        dead={"/characters/warrior/warrior-die.png"}
        className="w-56 h-56 absolute bottom-0 right-0"
        direction={SpriteDirection.left}
        id="second-pixel-dialog"
      />
    </div>
  );
}

export default App;
