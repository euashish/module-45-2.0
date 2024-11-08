import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <h3>This is Home</h3>
                <ul className="link-container">
                    <NavLink className="link-container" to="/">Home</NavLink>
                    <NavLink className="link-container" to="/posts">Posts</NavLink>
                    <NavLink className="link-container" to="/about">About</NavLink>
                    <NavLink className="link-container" to="/support">Support Us</NavLink>
                    <NavLink className="link-container" to="/contact-info">Check Error</NavLink>
                
                </ul>
            </nav>
        </div>
    );
};

export default Header;