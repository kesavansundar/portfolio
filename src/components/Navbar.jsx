import { FiGithub, FiLinkedin } from "react-icons/fi";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                KSP<span>.</span>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Education</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}
export default Navbar;