import { Link } from "react-router-dom";

export default function Header() {
    const topCarImg = [
        "images/img01.jpg",
        "images/img02.jpg",
        "images/img03.jpg",
        "images/img04.jpg"
    ]

    return (
        <>
            <div className="top">
                <Link to="/"><img src="images/logo.png" alt="" border="0" className="logo" /></Link>
                <ul className="topcar">
                    {topCarImg.map((el, index) => <li key={index}><img src={el} /></li>)}
                </ul>
            </div>
            <div className="nav">
                <ul className="topnav">
                    <li><Link to="/">Home</Link> | </li>
                    <li><Link to="/login">Login</Link> |</li>
                    <li><Link to="/register">Register</Link> |</li>
                </ul>
                <h2 className="gallary">Choose a car from Gallery</h2>
            </div>
            <div id="header"><img src='images/car.png' /></div>
        </>
    )
} 