import { Link } from 'react-router-dom';
import {ReactComponent as GithubIcon} from '../../assets/img/github.svg'
import './styles.css'

function Navbar() {
    return (
        <header className="fixed-top">
        <nav className="container">
            <div className="dsmovie-nav-content">
                <Link to="/">
                    <h1>DSMovie</h1>
                </Link>
                <a href="https://github.com/marcusvrom" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/marcusvrom</p>
                    </div>
                </a>
            </div>
        </nav>
        </header>
    );
}

export default Navbar