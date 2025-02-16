import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { DirectionalLight, MeshLambertMaterial } from "three";
import MobileScreen from "./MobileScreen";
import CanvasLoader from "./CanvasLoader";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};
const CollectionModels = () => {
  return (
    <Canvas>
      <Suspense fullback={<CanvasLoader />}>
        {/* 1- OrbitControls */}
        <Center>
          <OrbitControls enableRotate enablePan enableZoom={false} />

          {/* Camera */}
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 10]}
            args={[75, window.innerWidth / window.innerHeight, 0.1, 100]}
          />

          <MobileScreen
            position={[0, -4, 0]}
            scale={0.1}
            rotation={[0, 0, 0]}
          />

          {/* 2- Lights
        <directionalLight position={[1, 1, 1]} intensity={10} /> */}
          <directionalLight position={[10, 10, 10]} intensity={10} />
          <ambientLight intensity={10} />
        </Center>
      </Suspense>
    </Canvas>
  );
};

export default CollectionModels;
