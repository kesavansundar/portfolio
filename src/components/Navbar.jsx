import { FiGithub, FiLinkedin } from "react-icons/fi";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                KSP<span>.</span>
            </div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#certificates">Certificates</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}
export default Navbar;