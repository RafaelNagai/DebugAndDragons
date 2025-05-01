import { useState } from "react";
import { ScenarioModel } from "./models/ScenarioModel";
import { DialogScene } from "./DialogScene";

type ScenarioSequenceProps = {
  scenarios: ScenarioModel<any>[];
};

export const ScenarioSequence = ({ scenarios }: ScenarioSequenceProps) => {
  const [index, setIndex] = useState(0);
  const scenario = scenarios[index];
  const onNextScene = () =>
    setIndex((prev) => (prev < scenarios.length - 1 ? prev + 1 : prev));

  return (
    <div className="relative w-[100vw] h-[100vh]">
      {scenario.type === "dialog" && (
        <DialogScene data={scenario.data} onNextScene={onNextScene} />
      )}
    </div>
  );
};
