/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
	nodes: {
		music: THREE.Mesh;
	};
	materials: {};
};

export function Model(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/product_model-music_placeholder.gltf') as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.music.geometry} material={nodes.music.material} rotation={[Math.PI / 2, 0, 0]} />
		</group>
	);
}

useGLTF.preload('/product_model-music_placeholder.gltf');