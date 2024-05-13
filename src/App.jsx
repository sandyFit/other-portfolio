import React from 'react';
import Home from './pages/home/Home';
import Navbar from './layout/Navbar';
import TextNav from './layout/TextNav';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'



const App = () => {
    return (
        <section>
            {/* <ShaderGradientCanvas
                importedFiber={{ ...fiber, ...drei, ...reactSpring }}
                style={{
                    position: 'absolute',
                    top: 0,
                }}
            >
                <ShaderGradient cDistance={32} cPolarAngle={125} />
            </ShaderGradientCanvas> */}
            {/* <Navbar/> */}
            <TextNav/>
            <Home />
        </section>
    )
}

export default App;

