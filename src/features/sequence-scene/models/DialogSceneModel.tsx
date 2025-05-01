import { SpriteState } from "../../../core/components/character/BaseCharacterSprite";
import { SpriteSize } from "../../../core/components/character/CharacterSprite";

export class DialogSceneModel {
  constructor(
    public id: string,
    public targetId: string,
    public type: string,
    public title: string,
    public text: string,
    public background?: string,
    public left?: DialogSpriteModel,
    public middle?: DialogSpriteModel,
    public right?: DialogSpriteModel
  ) {}
}

export class DialogSpriteModel {
  constructor(
    public id: string,
    public sprite: string,
    public state: SpriteState,
    public size: SpriteSize
  ) {}
}
