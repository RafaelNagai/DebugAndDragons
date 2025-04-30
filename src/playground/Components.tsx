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
      <TextAnimated
        className="font-base text-primary"
        text={"Testing animated text component"}
      />
      <PixelDialogContainer thickness="7px" color="yellow" className="w-full">
        <div className="p-4">
          <h1 className="font-bold">TEST FIXED DIALOG</h1>
          <TextAnimated text={"Look that amazinggg!!"} />
        </div>
      </PixelDialogContainer>
      <PixelDialog
        targetId="pixel-dialog"
        title="DIALOG COMPONENT"
        text={
          "A true dialog component that we can adapt the style and get a callback when finish the text or skip to the next dialog. it is following the character by ID."
        }
        type={DialogType.secondary}
        onComplete={() => {
          console.log("UHUUULLL FINISHED DIALOG!!!");
        }}
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
        <div className="p-4 w-64">
          <h1 className="font-bold">PIXEL DIALOG CONTAINER</h1>
          <p>
            This is a dialog-based component, designed to be as a raw and
            self-contained as possible. I tested here as well direction to my
            character component.
          </p>
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
