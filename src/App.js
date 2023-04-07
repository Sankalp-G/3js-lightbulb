import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Bulb from './Bulb'
import { useState } from 'react';
import { useRef } from 'react';

function Model({isBackground, backgroundBlur}) {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [15, 0, 10], fov: 25 }}>

      <Stage intensity={0.5} environment="city" shadows={{ type: 'none' }} >
        <Bulb />
      </Stage>

      <OrbitControls autoRotate autoRotateSpeed={0.2} maxZoom={2} minZoom={1} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} intensity={20} radius={1} mipmapBlur />
      </EffectComposer>
      <Environment background={isBackground} preset="sunset" blur={backgroundBlur} />
    </Canvas>
  );
}

function TogglesOverlay(props) {
  return (
    <div className={'toggles-overlay'}>
      {props.children}
    </div>
  )
}

function App() {
  const [isBackground, setIsBackground] = useState(true);
  const [backgroundBlur, setBackgroundBlur] = useState(0.8);

  return (
    <>
      <Model isBackground={isBackground} backgroundBlur={backgroundBlur} />

      <TogglesOverlay>
        <button onClick={ () => { setIsBackground(!isBackground) } }> Toggle Background </button>
        <button onClick={ () => { setBackgroundBlur( backgroundBlur === 0 ? 0.8 : 0 ) }}> Toggle Background Blur </button>
      </TogglesOverlay>
    </>
  )
}

export default App;
