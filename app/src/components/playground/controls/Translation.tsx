import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";
import BaseControlCard from "./BaseControlCard";
import useAnimationPlayground from "@/store/playground/hook";

const Translation: React.FC = () => {
  const { handleAnimationConfigChange } = useAnimationPlayground();
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);
  const [enableX, setEnableX] = useState(false);
  const [enableY, setEnableY] = useState(false);
  const [enableZ, setEnableZ] = React.useState(false);

  return (
    <BaseControlCard title="Translation Controls">
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="translateX"
              checked={enableX}
              onCheckedChange={(checked: boolean) => {
                setEnableX(checked);
                if (checked) {
                  handleAnimationConfigChange("translateX", translateX);
                } else {
                  handleAnimationConfigChange("translateX", undefined);
                }
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="translateX"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Translate X{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (-300px to 300px)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableX}
              value={[translateX]}
              onValueChange={([value]) => {
                setTranslateX(value);
                if (enableX) handleAnimationConfigChange("translateX", value);
              }}
              min={-300}
              max={300}
              step={1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {translateX}px
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="translateY"
              checked={enableY}
              onCheckedChange={(checked: boolean) => {
                setEnableY(checked);
                if (enableY)
                  handleAnimationConfigChange("translateY", translateY);
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="translateY"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Translate Y{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (-300px to 300px)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableY}
              value={[translateY]}
              onValueChange={([value]) => {
                setTranslateY(value);
                if (enableY) handleAnimationConfigChange("translateY", value);
              }}
              min={-300}
              max={300}
              step={1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {translateY}px
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="translateZ"
              checked={enableZ}
              onCheckedChange={(checked: boolean) => {
                setEnableZ(checked);
                if (enableZ)
                  handleAnimationConfigChange("translateZ", translateZ);
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="translateZ"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Translate Z{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (-300px to 300px)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableZ}
              value={[translateZ]}
              onValueChange={([value]) => {
                setTranslateZ(value);
                if (enableZ) handleAnimationConfigChange("translateZ", value);
              }}
              min={-300}
              max={300}
              step={1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {translateZ}px
            </span>
          </div>
        </div>
      </div>
    </BaseControlCard>
  );
};

export default Translation;
