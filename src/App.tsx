import { CharacterSprite } from "./core/components/character/CharacterSprite";
import { PixelDialog } from "./core/components/pixel-dialog/PixelDialog";

function App() {
  return (
    <>
      {/* <PixelContainer thickness="5px" color="blue">
        <p className="p-2">Your content here</p>
      </PixelContainer>
      <PixelContainer thickness="2px" color="#00ff00">
        <p className="p-2">Your content here</p>
      </PixelContainer> */}
      <PixelDialog thickness="5px" color="blue">
        <div className="pixel-box__container">
          <h1>Pixel Dialog</h1>
          <p>This is a pixel dialog example.</p>
        </div>
      </PixelDialog>
      <CharacterSprite
        idle={"/characters/warrior/warrior-idle.png"}
        attack={"/characters/warrior/warrior-attack.png"}
        damaged={"/characters/warrior/warrior-damaged.png"}
        dead={"/characters/warrior/warrior-die.png"}
        className="w-56"
      />
    </>
  );
}

export default App;
