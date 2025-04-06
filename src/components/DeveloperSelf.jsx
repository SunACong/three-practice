/*
wait for me back to fix this bug
*/

import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/self/sunbyte.glb');

  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX('/models/self/idle.fbx');
  const { animations: wavingAnimation } = useFBX('/models/self/waving.fbx');


  const renameTracks = (animation) => {
    animation.tracks.forEach((track) => {
      track.name = track.name.replace('mixamorig', '');
    });
  };
  
  renameTracks(idleAnimation[0]);
  renameTracks(wavingAnimation[0]);

  idleAnimation[0].name = 'idle';
  wavingAnimation[0].name = 'waving';

  const { actions } = useAnimations(
    [idleAnimation[0], wavingAnimation[0]],
    group
  );

  useEffect(() => {
    // console.log(actions[animationName])
    actions[animationName].reset().fadeIn(0.5).play();
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="Wolf3D_Avatar"
        geometry={nodes.Wolf3D_Avatar.geometry}
        material={materials.Wolf3D_Avatar}
        skeleton={nodes.Wolf3D_Avatar.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload('/models/self/sunbyte.glb')

export default Developer;
