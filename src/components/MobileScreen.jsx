/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-12-pro-05dfc991665e45c68c8b7062136c0c6e
Title: iPhone 12 Pro
*/

import { useGLTF, useTexture } from "@react-three/drei";

const MobileScreen = (props) => {
  const { nodes, materials } = useGLTF(
    "/3D-models-three.js/models/iphone_12_pro.glb"
  );
  const screenTexture = useTexture(
    "/3D-models-three.js/textures/iphone_12_pro/image2.jpeg"
  );
  return (
    <group {...props} dispose={null}>
      <group position={[0, -2.588, 2.419]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry}
              material={materials.MicrophoneSpeaker}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry}
              material={materials.GrayGlossy2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone__12_Pro_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.iPhone12_Pro_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_PacificBlue_0.geometry}
              material={materials.PacificBlue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_GrayGlossy_0.geometry}
              material={materials.GrayGlossy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera1_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flash_Flash2_0.geometry}
              material={materials.Flash2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Flash_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LiDar_LiDar__0.geometry}
              material={materials.LiDar}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bezel_bezel_0.geometry}
              material={materials.bezel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontMic_GrayGlossy2_0.geometry}
              material={materials.GrayGlossy2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry}
              material={materials.MicrophoneSpeaker}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera001_bezel001_0.geometry}
              material={materials["bezel.001"]}
              position={[0, 0, -0.001]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_PacificBlue_0.geometry}
              material={materials.PacificBlue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_GrayGlossy_0.geometry}
              material={materials.GrayGlossy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera3_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_PacificBlue_0.geometry}
              material={materials.PacificBlue}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_GrayGlossy_0.geometry}
              material={materials.GrayGlossy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_FrontCamera_0.geometry}
              material={materials.FrontCamera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Cameralens_0.geometry}
              material={materials.Cameralens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Camera2_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Screen_Wallpaper_0.geometry}
              material={materials.Wallpaper}
            >
              <meshMatcapMaterial map={screenTexture} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Apple_Logo_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CameraModule001_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry}
              material={materials.MicrophoneSpeaker}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.VolumeButton_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PowerButton_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Port_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Port_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SimTray_Blackmatte_0.geometry}
              material={materials.Blackmatte}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SimTray_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MuteButton_BodyFrame_0.geometry}
              material={materials.BodyFrame}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/iphone_12_pro.glb");
export default MobileScreen;
