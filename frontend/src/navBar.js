import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <button>
                <Link to='/did'>
                    <li>Did</li>
                </Link>
                </button>
                <button>
                <Link to='/kisa'>
                    <li>Kisa</li>
                </Link>
                </button>
                <button>
                <Link to='/police'>
                    <li>Police</li>
                </Link>
                </button>
            </ul>
        </nav>
    )
}

export default NavBar;