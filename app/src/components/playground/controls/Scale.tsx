import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";
import BaseControlCard from "./BaseControlCard";
import useAnimationPlayground from "@/store/playground/hook";

const Scale: React.FC = () => {
  const { handleAnimationConfigChange } = useAnimationPlayground();
  const [scaleX, setScaleX] = useState(1);
  const [enableX, setEnableX] = useState(false);
  const [scaleY, setScaleY] = useState(1);
  const [enableY, setEnableY] = useState(false);
  const [scaleZ, setScaleZ] = useState(1);
  const [enableZ, setEnableZ] = useState(false);

  return (
    <BaseControlCard title="Scale Controls">
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="scaleX"
              checked={enableX}
              onCheckedChange={(checked: boolean) => {
                setEnableX(checked);
                handleAnimationConfigChange("scaleX", scaleX);
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="scaleX"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Scale X{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (0.1x to 3x)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableX}
              value={[scaleX]}
              onValueChange={([value]) => {
                setScaleX(value);
                if (enableX) handleAnimationConfigChange("scaleX", value);
              }}
              min={0.1}
              max={3}
              step={0.1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {scaleX}x
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="scaleY"
              checked={enableY}
              onCheckedChange={(checked: boolean) => {
                setEnableY(checked);
                if (enableY) handleAnimationConfigChange("scaleY", scaleY);
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="scaleY"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Scale Y{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (0.1x to 3x)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableY}
              value={[scaleY]}
              onValueChange={([value]) => {
                setScaleY(value);
                if (enableY) handleAnimationConfigChange("scaleY", value);
              }}
              min={0.1}
              max={3}
              step={0.1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {scaleY}x
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="scaleZ"
              checked={enableZ}
              onCheckedChange={(checked: boolean) => {
                setEnableZ(checked);
                if (enableZ) handleAnimationConfigChange("scaleZ", scaleZ);
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="scaleZ"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Scale Z{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (0.1x to 3x)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableZ}
              value={[scaleZ]}
              onValueChange={([value]) => {
                setScaleZ(value);
                if (enableZ) handleAnimationConfigChange("scaleZ", value);
              }}
              min={0.1}
              max={3}
              step={0.1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {scaleZ}x
            </span>
          </div>
        </div>
      </div>
    </BaseControlCard>
  );
};

export default Scale;
