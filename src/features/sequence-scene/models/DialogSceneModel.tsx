export class DialogSceneModel {
  constructor(
    public id: string,
    public targetId: string,
    public type: string,
    public title: string,
    public text: string,
    public left?: DialogSpriteModel,
    public middle?: DialogSpriteModel,
    public right?: DialogSpriteModel
  ) {}
}

export class DialogSpriteModel {
  constructor(public id: string, public sprite: string) {}
}
