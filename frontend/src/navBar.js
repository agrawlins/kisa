import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/did'>
                    <li>Did</li>
                </Link>
                <Link to='/kisa'>
                    <li>Kisa</li>
                </Link>
                <Link to='/police'>
                    <li>Police</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;