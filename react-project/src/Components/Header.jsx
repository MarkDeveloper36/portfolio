import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Header.css'
import LogoIcon from './LogoIcon.jsx'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid mx-4">
                <Link className="navbar-brand d-flex" to="/">
                    <LogoIcon></LogoIcon>
                    <p className="py-2 mb-0 hover-effect">Mark Kranenburg</p>
                    <div id="blinking-cursor" className="pt-3 mx-2">&mdash;</div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link underline-hover" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link underline-hover" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}