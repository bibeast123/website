// Update your Header.js
import { SocialLinks } from './SocialLinks'; // Import the SocialLinks component

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
            <SocialLinks />
                <a href="https://drive.google.com/file/d/1l-VbsNKa8INB6-R-G-3xid4pCMm4eO9z/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">Resume</a>
                <a href="#technical" className="button">Technical</a>
                
                <a href="#experience" className="button">Experience</a>
                <a href="#projects" className="button">Projects</a>
                <a href="mailto:bidhan.devkota@gmail.com" className="button">Contact</a>
            </nav>
            <div className="header-image">
    <img src="IMG_3553.JPG" alt="Descriptive Alt Text" />
            </div>
            <div className="about about-border">
            <div className="about">
                
                <h1>Hello 👋,<br></br>
                    I'm Bidhan Devkota</h1>
                    </div>

                    <div className ="about-2">
                <p>A computer science student from Texas, passionate about expanding my knowledge in diverse areas of technology.</p>
                </div>
            
            </div>
        </header>
    );
}

export default Header;