function About() {
    return(
        <section id="about" className="about-section">
            <div className="section-title">
                <p>Get to Know Me</p>
                <h2>About<span>Me</span></h2>
            </div>
            <div className="about-container">
                <div className="about-card">
                    <div className="about-icon">
                        KSP
                    </div>
                </div>
                <div className="about-content">
                    <h3>I'm Kesavan, a passionate<span> Full Stack Developer.</span></h3>
                    <p>
                        I'm a Computer Science student who is passionate about
                        web development and software development. I enjoy
                        creating modern, responsive and user-friendly web
                        applications.
                    </p>

                    <p>
                        I have been learning technologies like React, Node.js,
                        Express.js, MongoDB and MySQL. I also have an interest
                        in Data Analytics and Machine Learning.
                    </p>
                </div>
                <div className="about-details">
                    <div>
                        <strong>Name</strong>
                        <span>Kesavan Sundarapandiyan</span>
                    </div>
                    <div>
                        <strong>Role</strong>
                        <span>Full Stack Developer</span>
                    </div>
                    <div>
                        <strong>Focus</strong>
                        <span>Web Development</span>
                    </div>
                    <div>
                        <strong>Location</strong>
                        <span>Namakkal, Tamil Nadu, India</span>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default About;