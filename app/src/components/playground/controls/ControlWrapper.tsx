import Translation from "./Translation";
import Rotation from "./Rotation";
import Scale from "./Scale";

const ControlWrapper: React.FC = () => {
  return (
    <div className="space-y-6 font-mono">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-white font-semibold mb-4 font-mono">
          Transform Properties
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-white mb-2">Rotation</h3>
            <Rotation />
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-white mb-2">Scale</h3>
            <Scale />
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-white mb-2">Translation</h3>
            <Translation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlWrapper;
