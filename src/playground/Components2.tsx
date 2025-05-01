import { ScenarioModel } from "../features/sequence-scene/models/ScenarioModel";
import { ScenarioSequence } from "../features/sequence-scene/SequenceScene";
import scenes from "./dialog_sequence.json";

export const Components2Playground = () => {
  const scenarios: ScenarioModel<any>[] = scenes.scenes;
  return <ScenarioSequence scenarios={scenarios} />;
};
