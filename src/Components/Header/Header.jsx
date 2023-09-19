import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/user"> Users</Link>
                <Link to="/posts">Posts </Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
               
            </nav>
        </div>
    );
};

export default Header;