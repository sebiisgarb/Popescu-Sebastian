import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, MutableRefObject } from 'react';
import * as THREE from 'three';

function Scene({
  scrollRef,
  mouseRef,
}: {
  scrollRef: MutableRefObject<number>;
  mouseRef: MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    if (!groupRef.current || !outerRef.current || !innerRef.current) return;

    outerRef.current.rotation.x += delta * 0.12;
    outerRef.current.rotation.y += delta * 0.2;
    innerRef.current.rotation.x -= delta * 0.08;
    innerRef.current.rotation.y -= delta * 0.15;

    // scroll drives z rotation
    groupRef.current.rotation.z = scrollRef.current * 0.0015;

    // smooth mouse tilt
    groupRef.current.rotation.x += (mouseRef.current.y * 0.35 - groupRef.current.rotation.x) * 0.03;
    groupRef.current.rotation.y += (mouseRef.current.x * 0.35 - groupRef.current.rotation.y) * 0.03;

    // gentle breathing
    const s = 1 + Math.sin(time.current * 0.6) * 0.03;
    groupRef.current.scale.setScalar(s);
  });

  return (
    <group ref={groupRef}>
      {/* large outer shell */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.8, 1]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.22} />
      </mesh>
      {/* middle shell */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial color="#818cf8" wireframe transparent opacity={0.18} />
      </mesh>
      {/* core octahedron */}
      <mesh>
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export function FloatingGeometry({ scrollRef }: { scrollRef: MutableRefObject<number> }) {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#6366f1" />
      <pointLight position={[-3, -2, -3]} intensity={0.8} color="#818cf8" />
      <Scene scrollRef={scrollRef} mouseRef={mouseRef} />
    </Canvas>
  );
}
