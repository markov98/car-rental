export default function Header() {
    return (
        <>
            <div className="top">
                <a href="#"><img src="images/logo.png" alt="" border="0" className="logo" /></a>
                <ul className="topcar">
                    <li><a href="#"><img src="images/img01.jpg" alt="" width="79" height="92" border="0" /></a></li>
                    <li><a href="#"><img src="images/img02.jpg" alt="" border="0" /></a></li>
                    <li><a href="#"><img src="images/img03.jpg" alt="" border="0" /></a></li>
                    <li><a href="#"><img src="images/img04.jpg" alt="" border="0" /></a></li>
                </ul>
            </div>
            <div className="nav">
                <ul className="topnav">
                    <li><a href="#">Home</a> | </li>
                    <li><a href="#">Customer Care</a> |</li>
                    <li><a href="#">Faq </a> |</li>
                    <li><a href="#">Reservations</a> |</li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <h2 className="gallary">Choose a car from Gallery</h2>
            </div>
            <div id="header"><img src='images/car.png' /></div>
        </>
    )
} 