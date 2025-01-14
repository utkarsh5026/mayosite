import React from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import { EaseFnName } from "mayonation";
import useSettings from "@/store/settings/hook";

const AnimationSettings: React.FC = () => {
  const { settings, handleSettingsChange, easeFnsList } = useSettings();
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 className="text-gray-900 dark:text-white font-bold text-xl mb-6 font-mono">
        Animation Settings
      </h2>

      <div className="space-y-8">
        <div className="space-y-3">
          <label className="flex items-center text-gray-700 dark:text-gray-200 font-mono">
            Duration{" "}
            <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
              (100ms to 3000ms)
            </span>
          </label>
          <div className="flex items-center gap-4">
            <Slider
              id="durationValue"
              defaultValue={[settings.duration]}
              min={100}
              max={3000}
              step={100}
              value={[settings.duration]}
              onValueChange={(value) => {
                console.log("changing duration", value);
                handleSettingsChange({
                  ...settings,
                  duration: value[0],
                });
              }}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {settings.duration}ms
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-center text-gray-700 dark:text-gray-200 font-mono">
            Easing{" "}
            <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
              (timing function)
            </span>
          </label>
          <Select
            value={settings.ease ?? "easeInOut"}
            onValueChange={(value: EaseFnName) => {
              console.log("changing ease", value);
              handleSettingsChange({
                ...settings,
                ease: value,
              });
            }}
          >
            <SelectTrigger className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectValue placeholder="Select Easing" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <SelectGroup>
                <SelectLabel className="text-gray-500 dark:text-gray-400">
                  Easing
                </SelectLabel>
                {easeFnsList.map((ease) => (
                  <SelectItem
                    key={ease}
                    value={ease}
                    className="text-gray-700 dark:text-gray-200"
                  >
                    {ease}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mt-2 leading-relaxed">
            • Linear: Constant speed
            <br />
            • Ease In Out: Slow start and end
            <br />
            • Ease In: Slow start
            <br />• Ease Out: Slow end
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationSettings;
