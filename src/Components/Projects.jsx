import MagicBento from "./Magicbento"
import './Projects.css'

export default function Projects () {
    return (
        <>
        <section id="projects" className="projects-wrapper">
        <div className="projects-container">
            <div>
            <p className="projects-label">Projects</p>
            </div>
            <MagicBento />
        </div>
        </section>
        </>
    )
}