import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <Loader
      type="Circles"
      color="rgba(70, 70, 241, 0.5)"
      height={66}
      width={66}
      timeout={3000}
    />
  );
};

export default LoaderComponent;
