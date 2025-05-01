import React, { useEffect, useState } from "react";
import { ScenarioModel } from "./models/ScenarioModel";
import { DialogScene } from "./DialogScene";

type ScenarioSequenceProps = {
  scenarios: ScenarioModel<any>[];
};

export const ScenarioSequence = ({ scenarios }: ScenarioSequenceProps) => {
  const [index, setIndex] = useState(0);
  const [currentScenario, setCurrentScenario] =
    useState<React.ReactNode | null>(null);

  useEffect(() => {
    const setScenario = (scenario: ScenarioModel<any>) => {
      switch (scenario.type) {
        case "dialog":
          setCurrentScenario(
            <DialogScene
              data={scenarios[index].data}
              onNextScene={function (): void {
                setIndex((prev) =>
                  prev < scenarios.length - 1 ? prev + 1 : prev
                );
              }}
            />
          );
          break;
      }
    };

    setScenario(scenarios[index]);
  }, [index]);

  return <div className="relative w-[100vw] h-[100vh]">{currentScenario}</div>;
};
