import React from "react";
import useAnimationPlayground from "@/store/playground/hook";
import { Button } from "@/components/ui/button";
import { Loader2, Play, RefreshCw } from "lucide-react";

const Preview: React.FC = () => {
  const { elementRef, animate, reset, loading } = useAnimationPlayground();
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
      <div className="flex gap-4">
        <Button
          className="flex-1 bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => animate()}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Playing...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Play Animation
            </>
          )}
        </Button>
        <Button
          variant="secondary"
          className="flex-1"
          onClick={() => reset()}
          disabled={loading}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Preview;
