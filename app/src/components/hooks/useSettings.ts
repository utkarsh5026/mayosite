import { useMemo, useState } from "react";
import { easeFns } from "mayonation";

type Settings = {
  duration: number;
  ease?: keyof typeof easeFns;
};

const useSettings = () => {
  const [settings, setSettings] = useState<Settings>({
    duration: 1000,
    ease: "easeInOut",
  });

  console.log(easeFns);

  const easeFnsList = useMemo(
    () => Object.keys(easeFns) as (keyof typeof easeFns)[],
    []
  );

  const handleSettingsChange = (newSettings: typeof settings) => {
    setSettings(newSettings);
  };

  return { settings, handleSettingsChange, easeFnsList };
};

export default useSettings;
