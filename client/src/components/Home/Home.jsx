import './Home.css';

export default function Home() {
    return (
        <>
            <div className="left"> <h2>Welcome!</h2> <br />
                <p>This is <strong>Markov Rentals</strong>, a Car Rental website I have created using React.</p>
            </div>
            <form action="#" method="get" className="search">
                <img src="images/carbooking.gif" alt="" className="head" /><br />
                <label>Select State :</label>
                <select className="one">
                    <option>Select State</option>
                </select>
                <label>Select Location :</label>
                <select className="two">
                    <option>Select Locations</option>
                </select>
                <label>Pick-Up Date :</label>
                <select className="three">
                    <option></option>
                </select>
                <select className="four">
                    <option></option>
                </select>
                <select className="five">
                    <option></option>
                </select>
                <a href="#"><img src="images/date.gif" alt="" border="0" className="date" /></a>
                <label>Drop-Off Date :</label>
                <select className="three">
                    <option></option>
                </select>
                <select className="four">
                    <option></option>
                </select>
                <select className="five">
                    <option></option>
                </select>
                <a href="#"><img src="images/date.gif" alt="" border="0" className="date" /></a>
                <input type="submit" className="submit" value="Submit" />
            </form>
            <h3 className="tech"><img src="images/our_tech.gif" alt="" width="165" height="16" /></h3>
            <div className="ads"> <a href="#"><img src="images/ads01.jpg" alt="" width="94" height="45" border="0" /></a><a href="#"><img src="images/ads02.jpg" alt="" border="0" /></a><a href="#"><img src="images/ads03.jpg" alt="" width="80" height="45" border="0" /></a><a href="#"><img src="images/ads04.jpg" alt="" border="0" /></a><a href="#"><img src="images/ads05.jpg" alt="" border="0" /></a><a href="#"><img src="images/ads06.jpg" alt="" width="101" height="45" border="0" /></a><a href="#"><img src="images/ads07.jpg" alt="" width="81" height="45" border="0" /></a><a href="#"><img src="images/ads08.jpg" alt="" width="81" height="45" border="0" /></a></div>
            <p className="brd"></p>
        </>
    )
}