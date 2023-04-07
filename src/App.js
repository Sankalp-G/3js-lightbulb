import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Bulb from './Bulb'
import { useState } from 'react';
import { useRef } from 'react';

function Model({isBackground, backgroundBlur, backgroundType}) {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [15, 0, 10], fov: 25 }}>

      <Stage intensity={0.5} environment={backgroundType} shadows={{ type: 'none' }} >
        <Bulb />
      </Stage>

      <OrbitControls autoRotate autoRotateSpeed={0.2} maxZoom={2} minZoom={1} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} intensity={20} radius={1} mipmapBlur />
      </EffectComposer>
      <Environment background={isBackground} preset={backgroundType} blur={backgroundBlur} />
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

function BackgroundOptions() {
  return (
    <>
      <option value="sunset">Sunset</option>
      <option value="dawn">Dawn</option>
      <option value="night">Night</option>
      <option value="warehouse">Warehouse</option>
      <option value="forest">Forest</option>
      <option value="apartment">Apartment</option>
      <option value="studio">Studio</option>
      <option value="city">City</option>
      <option value="park">Park</option>
      <option value="lobby">Lobby</option>
    </>
  )
}

function App() {
  const [isBackground, setIsBackground] = useState(true);
  const [backgroundBlur, setBackgroundBlur] = useState(0.8);
  const [backgroundType, setBackgroundType] = useState("sunset")

  return (
    <>
      <Model isBackground={isBackground} backgroundBlur={backgroundBlur} backgroundType={backgroundType} />

      <TogglesOverlay>
        <button onClick={ () => { setIsBackground(!isBackground) } }> Toggle Background </button>
        <button onClick={ () => { setBackgroundBlur( backgroundBlur === 0 ? 0.8 : 0 ) }}> Toggle Background Blur </button>

        <select value={backgroundType} onChange={ (event) => {setBackgroundType(event.target.value)} }>
          <BackgroundOptions />
        </select>
      </TogglesOverlay>
    </>
  )
}

export default App;
