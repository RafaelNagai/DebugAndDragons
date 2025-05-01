export class DialogSceneModel {
  constructor(
    public id: string,
    public targetId: string,
    public character: string,
    public type: string,
    public title: string,
    public text: string
  ) {}
}
