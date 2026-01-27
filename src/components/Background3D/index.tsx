import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: ${({ theme }) => theme.backgroundPage};
  pointer-events: none;
`;

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    const colors = new Float32Array(1000 * 3);

    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Alternate between blue and purple
      if (i % 2 === 0) {
        colors[i * 3] = 0.15; // R
        colors[i * 3 + 1] = 0.39; // G
        colors[i * 3 + 2] = 0.92; // B (#2563EB)
      } else {
        colors[i * 3] = 0.49; // R
        colors[i * 3 + 1] = 0.24; // G
        colors[i * 3 + 2] = 0.93; // B (#7C3AED)
      }
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const Background3D: React.FC = () => {
  return (
    <BackgroundContainer>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </BackgroundContainer>
  );
};
