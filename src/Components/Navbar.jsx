import './Navbar.css'

export default function Navbar () {
    return (
        <>
        <header>
            <div className="logo">Solomon</div>
            <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
        </header>
        </>
    )
}