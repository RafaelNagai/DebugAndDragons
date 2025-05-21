export class BattleSceneModel {
  constructor(public enemy: EnemyModel) {}
}

export class EnemyModel {
  constructor(
    public name: string,
    public maxLife: number,
    public sprite: string
  ) {}
}
