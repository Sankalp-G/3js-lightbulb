import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Bulb from './Bulb'

function Model() {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [15, 0, 10], fov: 25 }}>

      <Stage intensity={0.5} environment="city" shadows={{ type: 'none' }} >
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

function TogglesOverlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: 'auto', height: 'auto' }}>

    </div>
  )
}

function App() {
  return (
    <>
      <Model />
      <TogglesOverlay />
    </>
  )
}

export default App;
