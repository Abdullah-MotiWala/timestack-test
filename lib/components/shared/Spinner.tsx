import React from "react";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
