import React from "react";
import useAnimationPlayground from "@/store/playground/hook";

const Preview: React.FC = () => {
  const { elementRef, animate, animationConfig } = useAnimationPlayground();
  console.dir(animationConfig, { depth: null });

  return (
    <div className="flex flex-col gap-4">
      <div
        className="bg-gray-800 rounded-lg p-8 flex items-center justify-center h-[600px]"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div
          ref={elementRef}
          className="w-[200px] h-[100px] bg-blue-500 rounded-lg shadow-lg"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "visible",
            willChange: "transform",
          }}
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
