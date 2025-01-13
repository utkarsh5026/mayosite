import { useCallback, useRef, useState } from "react";
import type { AnimationConfig } from "mayonation";
import { Animation } from "mayonation";
import useSettings from "./useSettings";

const useAnimationPlayground = () => {
  const { settings } = useSettings();
  const elementRef = useRef<HTMLDivElement>(null);
  const [animationConfig, setAnimationConfig] = useState<AnimationConfig>({
    duration: 1000,
  });

  console.log(animationConfig);

  const handleAnimationConfigChange = useCallback(
    (
      key: keyof AnimationConfig,
      value: AnimationConfig[keyof AnimationConfig]
    ) => {
      setAnimationConfig((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const animate = useCallback(() => {
    if (!elementRef.current) return;
    const animation = new Animation(
      elementRef.current,
      animationConfig,
      settings
    );
    animation.play();
  }, [animationConfig, settings]);

  return {
    elementRef,
    animationConfig,
    handleAnimationConfigChange,
    animate,
  };
};

export default useAnimationPlayground;
