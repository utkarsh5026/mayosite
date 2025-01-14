import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { selectSettings, selectEaseFnsList, updateSettings } from "./slice";

const useSettings = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector(selectSettings);
  const easeFnsList = selectEaseFnsList();

  const handleSettingsChange = useCallback(
    (newSettings: typeof settings) => {
      dispatch(updateSettings(newSettings));
    },
    [dispatch]
  );

  return { settings, handleSettingsChange, easeFnsList };
};

export default useSettings;
