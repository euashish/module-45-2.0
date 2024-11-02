import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <h3>This is Home</h3>
                <ul className="link-container">
                    <Link className="link-container" to="/">Home</Link>
                    <Link className="link-container" to="/posts">Posts</Link>
                    <Link className="link-container" to="/about">About</Link>
                    <Link className="link-container" to="/support">Support Us</Link>
                    <Link className="link-container" to="/contact">Contact</Link>
                
                </ul>
            </nav>
        </div>
    );
};

export default Header;