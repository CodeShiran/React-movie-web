import { Link } from 'react-router-dom'
import '../Css/Navbar.css'

function NavBar() {
    return ( <nav className="navbar">
        <div className="navbar-brand">
            <Link to='/'>Movie App</Link>
            <div className="navbar-links">
                <Link to='/' className="nav-links">Home</Link>
                <Link to='/favorites' className="nav-links">Favorites</Link>
            </div>
        </div>
    </nav>
    );
}

export default NavBar