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
  resetAnimationConfig,
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
          onComplete: () => {
            dispatch(setLoading(false));
          },
        }
      );

      animation.play();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(setError(errorMessage));
      console.error("Animation error:", error);
    }
  }, [animationConfig, settings, dispatch]);

  const debugAnimate = useCallback(() => {
    console.log("Animate called with current config:", animationConfig);
    animate();
  }, [animate, animationConfig]);

  const reset = useCallback(() => {
    if (elementRef.current) elementRef.current.style.transform = "";
    dispatch(resetAnimationConfig());
  }, [dispatch]);

  return {
    elementRef,
    animationConfig,
    handleAnimationConfigChange,
    animate: debugAnimate,
    reset,
    loading,
    error,
  };
};

export default useAnimationPlayground;
