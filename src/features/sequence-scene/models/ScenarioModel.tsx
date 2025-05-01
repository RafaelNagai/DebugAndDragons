export class ScenarioModel<T> {
  constructor(public id: string, public type: string, public data: T) {}
}
