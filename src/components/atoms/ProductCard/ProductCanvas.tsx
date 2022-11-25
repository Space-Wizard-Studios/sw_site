import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Preload } from '@react-three/drei';
import { useInView } from 'framer-motion';

import Icon from '@atoms/models/IconModel.dev';

interface Props {
	isOpen: boolean;
	modelPath: string;
	modelColor: number;
}

export function ProductCanvas({ isOpen, modelPath, modelColor }: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<Canvas ref={ref}>
			<PerspectiveCamera makeDefault fov={30} position={[0, 0, 10]} rotation={[0, 0, 0]} />
			<pointLight position={[10, 10, 10]} intensity={1} />
			<Suspense fallback={null}>
				<Icon
					modelPath={modelPath}
					modelColor={modelColor}
					isOpen={isOpen}
					isInView={isInView}
					position={[0, 0, 0]}
					rotation={[0, 0.12, -0.12]}
					scale={5}
				/>
			</Suspense>
			<Preload all />
		</Canvas>
	);
}
