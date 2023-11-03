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
                <a href="#"><img src="images/logo.png" alt="" border="0" className="logo" /></a>
                <ul className="topcar">
                    {topCarImg.map((el, index) => <li  key={index}><img src={el} /></li>)}
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