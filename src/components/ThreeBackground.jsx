import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const AnimatedSphere = () => {
  const ref = useRef()
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.1
    ref.current.rotation.y = t * 0.2
  })

  return (
    <Sphere ref={ref} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#333333"
        attach="material"
        distort={0.5}
        speed={1}
        roughness={0.2}
        wireframe
      />
    </Sphere>
  )
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.4} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
