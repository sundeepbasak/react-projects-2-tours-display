import React from "react";
import {Puff} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Puff color='#00BFFF' height={550} width={70} />
    </div>
  );
};

export default Loading;
