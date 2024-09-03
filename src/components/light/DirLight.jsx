import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { DirectionalLightHelper } from "three";

const DirLight = () => {
  const dirLight = useRef();
  useHelper(dirLight, DirectionalLightHelper, 1, "red");
  return (
    <>
      <directionalLight position={[-1,0,0]} color={"yellow"} intensity={1} ref={dirLight} />
    </>
  );
};

export default DirLight;
