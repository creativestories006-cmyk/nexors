import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

interface AIOrbProps {
  pointer: React.MutableRefObject<{ x: number; y: number }>
}

function NeuralPoints() {
  const ref = useRef<THREE.Points>(null)
  const count = 900
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 0.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#8B6CFF"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function Core({ pointer }: AIOrbProps) {
  const mesh = useRef<THREE.Mesh>(null)
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.15
      mesh.current.rotation.x += delta * 0.04
    }
    if (group.current) {
      const targetX = pointer.current.y * 0.3
      const targetY = pointer.current.x * 0.3
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05
    }
  })

  return (
    <group ref={group}>
      <Icosahedron ref={mesh} args={[1.35, 2]}>
        <meshStandardMaterial
          color="#0D0D12"
          emissive="#37E6E0"
          emissiveIntensity={0.35}
          wireframe
        />
      </Icosahedron>
      <Icosahedron args={[0.9, 1]}>
        <meshStandardMaterial
          color="#8B6CFF"
          emissive="#8B6CFF"
          emissiveIntensity={0.6}
          transparent
          opacity={0.18}
        />
      </Icosahedron>
      <NeuralPoints />
    </group>
  )
}

export default function AIOrb({ pointer }: AIOrbProps) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#8B6CFF" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#37E6E0" />
      <Core pointer={pointer} />
    </>
  )
}
