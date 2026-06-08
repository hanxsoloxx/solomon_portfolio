import "./About.css"
import { motion } from "framer-motion"

export default function About () {
    return (
            <>
            <section id="about" className="about-wrapper">
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="about-container">
                    <div className="amber-line"></div>
                    <div className="about-content">
                        <p className="about-label">About Me</p>
                        <p className="about-text">I'm a frontend developer focused on building clean, scalable, and impactful web experiences the kind that feel as good as they look.</p>
                        <p className="about-text">Currently exploring the intersection of frontend and AI, with the goal of building intelligent agents that actually make a difference.</p>
                    </div>
                </ motion.div>
            </section>
            </>
        )
}