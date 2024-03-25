import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)]">
      <ScaleLoader size={100} color="#F92FD3" />
    </div>
  );
};

export default Loader;
