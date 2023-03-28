import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Bulb from './Bulb'

function Model() {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [-15, 0, 10], fov: 25 }}>
      <fog attach="fog" args={['black', 15, 21.5]} />

      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={false}>
        <Bulb />
      </Stage>

      <OrbitControls autoRotate autoRotateSpeed={0.2} maxZoom={2} minZoom={1} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} intensity={20} radius={1} mipmapBlur />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.8} />
    </Canvas>
  );
}

export default Model;
