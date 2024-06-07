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
            <Navbar/>
            <Home />
        </section>
    )
}

export default App;

