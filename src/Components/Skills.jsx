import './Skills.css'
import { motion, scale } from "framer-motion"

export default function Skills () {
    const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 }, scale: 1 }
}

    return (
        <>
        <section id='skills' className="grid-section">
            <div className="skills-header">
                <p className="skills-label">Skills</p>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid-container">
                <motion.div variants={itemVariants} className='grid-item'>HTML</motion.div>
                <motion.div variants={itemVariants} className='grid-item'>CSS</motion.div>
                <motion.div variants={itemVariants} className='grid-item'>JavaScript</motion.div>
                <motion.div variants={itemVariants} className='grid-item'>React</motion.div>
                <motion.div variants={itemVariants} className='grid-item'>Github</motion.div>
                <motion.div variants={itemVariants} className='grid-item'>Rest APIs</motion.div>
            </motion.div>

        </section>
        </>
    )
}