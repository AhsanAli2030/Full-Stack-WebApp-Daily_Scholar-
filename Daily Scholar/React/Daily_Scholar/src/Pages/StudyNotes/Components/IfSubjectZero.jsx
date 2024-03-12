import React from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import GirlDancing from "../3dModel/GirlDancing.jsx";
function IfSubjectZero() {
  return (
    <>
      <div id="below-subjects-portion">
        <div id="nothing-to-study">
          <span>Nothing to Study !</span>
          <span>😴</span>
        </div>
        <div id="wrap-this">
          <Canvas camera={{ position: [0, 0, 150], fov: 40 }}>
            <Stage environment="city" intensity={0.6}>
              <GirlDancing position={[0, -0.9, 0]} scale={[1, 1, 1]} />
            </Stage>
            <BakeShadows />
            <OrbitControls
              makeDefault
              autoRotate
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default IfSubjectZero;
