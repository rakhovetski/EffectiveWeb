import './Navigation.css'
import { NavigationLogo } from './navigation-logo/NavigationLogo'

export function Navigation() {
    return (
        <nav className="navbar">
            <NavigationLogo />
            <span>
            <ul>
                <li className="navbar-item">
                    <a href="#">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Find a doctor</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Apps</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Testimonials</a>
                </li>
                <li className="navbar-item">
                    <a href="#">About us</a>
                </li>
            </ul>
            </span>
        </nav>
    )
}