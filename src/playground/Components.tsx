import {
  CharacterSprite,
  SpriteDirection,
} from "../core/components/character/CharacterSprite";
import {
  DialogType,
  PixelDialog,
} from "../core/components/pixel-dialog/PixelDialog";
import { PixelDialogContainer } from "../core/components/pixel-dialog/PixelDialogContainer";
import { TextAnimated } from "../core/components/texts/TextAnimated";

export const CompoentsPlayground = () => {
  return (
    <div className="h-screen w-screen relative">
      <p className="font-base text-primary">ABCefg abc DEF</p>
      <PixelDialogContainer thickness="7px" color="yellow" className="w-full">
        <div className="p-4">
          <h1>Test Relative Position</h1>
          <TextAnimated text={"hello mother fuck... let's play!"} />
        </div>
      </PixelDialogContainer>
      <PixelDialog
        targetId="pixel-dialog"
        title="Naga"
        text={"Aow!! A true component which it will type a random text."}
        type={DialogType.secondary}
      />
      <CharacterSprite
        idle={"/characters/warrior/warrior-idle.png"}
        attack={"/characters/warrior/warrior-attack.png"}
        damaged={"/characters/warrior/warrior-damaged.png"}
        dead={"/characters/warrior/warrior-die.png"}
        className="w-56 h-56 absolute bottom-0 left-0"
        id="pixel-dialog"
      />
      <PixelDialogContainer
        thickness="7px"
        color="red"
        targetId="second-pixel-dialog"
      >
        <div className="p-4">
          <h1>Pixel Dialog</h1>
          <p>This is a pixel dialog example.</p>
        </div>
      </PixelDialogContainer>
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
};
