import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import paths from "../../paths";
import './Header.css';



export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext)

    return (
        <>
            <div className="top">
                <Link to="/"><img src="/images/logo.png" alt="" border="0" className="logo" /></Link>
            </div>
            <div className="nav">
                <ul className="topnav">
                    <li><Link to={paths.home}>Home</Link> | </li>
                    <li><Link to={paths.carList}>Car List</Link>|</li>
                    {isAuthenticated ?
                        <>
                            <li><Link to={paths.addCar}>Add Car</Link> |</li>    
                            <li><Link to={paths.logout}>Logout</Link></li>
                        </> :
                        <>
                            <li><Link to={paths.login}>Login</Link> |</li>
                            <li><Link to={paths.register}>Register</Link> </li>
                        </>
                    }
                </ul>
                <h2 className="hello">Hello, {isAuthenticated ? <>{username}</> : <>guest</>}!</h2>
            </div>
            <div id="header"><img src='/images/car.png' /></div>
        </>
    )
} 