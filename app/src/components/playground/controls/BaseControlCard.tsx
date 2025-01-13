import React from "react";

interface BaseControlCardProps {
  title: string;
  children: React.ReactNode;
}

const BaseControlCard: React.FC<BaseControlCardProps> = ({
  title,
  children,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
      <h2 className="text-gray-900 dark:text-white font-bold text-xl mb-6 font-mono">
        {title}
      </h2>
      <div className="space-y-8">{children}</div>
    </div>
  );
};

export default BaseControlCard;
