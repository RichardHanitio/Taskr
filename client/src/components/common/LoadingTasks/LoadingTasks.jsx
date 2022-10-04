import React from "react";
import { Bars } from "react-loader-spinner";
import "./loadingTasks.scss";

const LoadingTasks = ({className}) => {
  return (
    <div className={`loading-container ${className}`}>
      <Bars
        width="60"
        color="#ffffff"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default LoadingTasks;
