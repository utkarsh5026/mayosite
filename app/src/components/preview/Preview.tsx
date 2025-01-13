import React from "react";
import useAnimationPlayground from "../hooks/useAnimationPlayground";

const Preview: React.FC = () => {
  const { elementRef, animate } = useAnimationPlayground();

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-800 rounded-lg p-8 flex items-center justify-center h-[600px]">
        <div
          ref={elementRef}
          id="myBox"
          className="w-[200px] h-[100px] bg-blue-500 rounded-lg shadow-lg"
        />
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
        onClick={() => animate()}
      >
        Play Animation
      </button>
    </div>
  );
};

export default Preview;
