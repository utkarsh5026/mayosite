import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";
import BaseControlCard from "./BaseControlCard";
import useAnimationPlayground from "@/store/playground/hook";

const Rotation: React.FC = () => {
  const { handleAnimationConfigChange } = useAnimationPlayground();
  const [rotateX, setRotateX] = useState(0);
  const [enableX, setEnableX] = useState(false);
  const [rotateY, setRotateY] = useState(0);
  const [enableY, setEnableY] = useState(false);
  const [rotateZ, setRotateZ] = useState(0);
  const [enableZ, setEnableZ] = useState(false);

  return (
    <BaseControlCard title="Rotation Controls">
      <div className="space-y-8">
        {/* X Rotation */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rotateX"
              checked={enableX}
              onCheckedChange={(checked: boolean) => {
                setEnableX(checked);
                if (checked) {
                  handleAnimationConfigChange("rotateX", rotateX);
                } else {
                  handleAnimationConfigChange("rotateX", undefined);
                }
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="rotateX"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Rotate X{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (0° to 360°)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableX}
              value={[rotateX]}
              onValueChange={([value]) => {
                setRotateX(value);
                if (enableX) handleAnimationConfigChange("rotateX", value);
              }}
              max={360}
              step={1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {rotateX}°
            </span>
          </div>
        </div>

        {/* Y Rotation */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rotateY"
              checked={enableY}
              onCheckedChange={(checked: boolean) => {
                setEnableY(checked);
                if (enableY) handleAnimationConfigChange("rotateY", rotateY);
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="rotateY"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Rotate Y{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (0° to 360°)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableY}
              value={[rotateY]}
              onValueChange={([value]) => {
                setRotateY(value);
                if (enableY) handleAnimationConfigChange("rotateY", value);
              }}
              max={360}
              step={1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {rotateY}°
            </span>
          </div>
        </div>

        {/* Z Rotation */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rotateZ"
              checked={enableZ}
              onCheckedChange={(checked: boolean) => {
                setEnableZ(checked);
                if (enableZ) handleAnimationConfigChange("rotateZ", rotateZ);
              }}
              className="border-gray-300 dark:border-gray-700"
            />
            <label
              htmlFor="rotateZ"
              className="flex items-center text-gray-700 dark:text-gray-200 font-mono"
            >
              Rotate Z{" "}
              <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                (0° to 360°)
              </span>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Slider
              disabled={!enableZ}
              value={[rotateZ]}
              onValueChange={([value]) => {
                setRotateZ(value);
                if (enableZ) handleAnimationConfigChange("rotateZ", value);
              }}
              max={360}
              step={1}
              className="w-full"
            />
            <span className="text-gray-700 dark:text-gray-200 font-mono w-16 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {rotateZ}°
            </span>
          </div>
        </div>
      </div>
    </BaseControlCard>
  );
};

export default Rotation;
