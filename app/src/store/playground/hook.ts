import { useCallback, useRef } from "react";
import type { AnimationConfig } from "mayonation";
import { Animation } from "mayonation";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  setAnimationConfig,
  setLoading,
  setError,
  selectAnimationConfig,
  selectAnimationLoading,
  selectAnimationError,
} from "./slice";
import useSettings from "../settings/hook";

const useAnimationPlayground = () => {
  const dispatch = useAppDispatch();
  const { settings } = useSettings();
  const elementRef = useRef<HTMLDivElement>(null);

  const animationConfig = useAppSelector(selectAnimationConfig);
  const loading = useAppSelector(selectAnimationLoading);
  const error = useAppSelector(selectAnimationError);

  const handleAnimationConfigChange = useCallback(
    (
      key: keyof AnimationConfig,
      value: AnimationConfig[keyof AnimationConfig]
    ) => {
      dispatch(setAnimationConfig({ key, value }));
    },
    [dispatch]
  );

  const animate = useCallback(async () => {
    if (!elementRef.current) {
      dispatch(setError("Element ref is not available"));
      return;
    }

    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      console.log("Starting animation with config:", animationConfig);
      console.log("settings", settings);

      const animation = new Animation(
        elementRef.current,
        {
          ...animationConfig,
          duration: settings.duration,
          easing: settings.ease,
        },
        {
          duration: settings.duration,
          easing: settings.ease,
        }
      );

      animation.play();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(setError(errorMessage));
      console.error("Animation error:", error);
    } finally {
      dispatch(setLoading(false));
    }
  }, [animationConfig, settings, dispatch]);

  const debugAnimate = useCallback(() => {
    console.log("Animate called with current config:", animationConfig);
    animate();
  }, [animate, animationConfig]);

  return {
    elementRef,
    animationConfig,
    handleAnimationConfigChange,
    animate: debugAnimate,
    loading,
    error,
  };
};

export default useAnimationPlayground;
