import './Hero.css'
import Avatar from "../assets/avatar1.png"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function Hero({ splashRef }) {
    return (
        <>
        <div className="hero-container">

            <div className="hero-glow">

            </div>

            <div className="hero-content">

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0 }}  className="hero-intro">Hello, I'm</motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} className="hero-firstname"
                onAnimationComplete={() => {
                const el = document.querySelector('.hero-firstname')
                if (el && splashRef?.current) {
                const rect = el.getBoundingClientRect()
                splashRef.current.triggerSplat(rect.right, rect.top + rect.height / 2)
                }
}}
                >Solomon <span className='hero-lastname'>Chibuike</span></motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }} className="hero-role">Web Developer & AI Engineer in the making</motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }} className="hero-tagline">I craft modern, intelligent, and user-focused web experiences that solve real problems</motion.p>
                <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }} className="hero-btn">View my work</motion.button>
                            
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 1 }} className="hero-socials">
                <a href="https://github.com/hanxsoloxx"><FaGithub /></a>
                <a href="https://linkedin.com/in/solomon-chibuike-7b46343bb"><FaLinkedinIn /></a>
                <a href="mailto:solomilton27@gmail.com"><HiOutlineMail /></a>
            </motion.div>

            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 0.6 }} className="hero-avatar">
                <img src={Avatar} alt="Profile picture" />
            </motion.div>

        </div>
        </>
    )
}