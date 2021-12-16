import React from "react";
import Lottie from "react-lottie";
export default function Loader({ isRegister }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./../../../assets/loading_animation.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {isRegister ? (
        <div>
          <Lottie options={defaultOptions} height={35} width={35} />
        </div>
      ) : (
        <div>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      )}
    </>
  );
}
