import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import SplashCursor from "./Components/SplashCursor";
import Navbar from "./Components/Navbar";
import { useRef } from "react";
import { useEffect } from 'react'

export default function App () {
    const splashRef = useRef(null)
    useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
}, [])
    return (
        <>
        <SplashCursor ref={splashRef} />
        <Navbar />
        <Hero splashRef={splashRef} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </>
    )
}