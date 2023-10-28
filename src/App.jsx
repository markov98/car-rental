
export default function App() {

  return (
    <div id="main"> <a href="#"><img src="images/logo.gif" alt="" border="0" className="logo" /></a>
      <ul className="topcar">
        <li><a href="#"><img src="images/img01.jpg" alt="" width="79" height="92" border="0" /></a></li>
        <li><a href="#"><img src="images/img02.jpg" alt="" border="0" /></a></li>
        <li><a href="#"><img src="images/img03.jpg" alt="" border="0" /></a></li>
        <li><a href="#"><img src="images/img04.jpg" alt="" border="0" /></a></li>
      </ul>
      <ul className="topnav">
        <li><a href="#">Home</a> | </li>
        <li><a href="#">Customer Care</a> |</li>
        <li><a href="#">Faq </a> |</li>
        <li><a href="#">Reservations</a> |</li>
        <li><a href="#">Contact</a></li>
      </ul>
      <h2 className="gallary">Choose a car from Gallery</h2>
      <div id="header"> </div>
      <div id="body">
        <div className="left"> <img src="images/welcome.gif" alt="" /><br />
          <p>This is <strong>Car Online</strong> , a free, fully standards-compliant CSS template designed by Free CSS Templates. <br />
            This free template is released under a Creative Commons Attributions 2.5 license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you keep the links in the footer intact. Aside from that, have fun with it :) </p>
          <p><a href="#">Fusce feugiat malesuada odio morbi nunc odio gravida at</a>... tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci.Donec sit amet eros.</p>
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
        <p className="footer"><a href="#">Home</a> | <a href="#">Customer Care</a> | <a href="#">Faq </a> | <a href="#">Reservations</a> | <a href="#">Contact</a></p>
      </div>
      <div className="foot"> Copyright Information Goes Here<br />
        Designed by <a href="http://www.free-css-templates.com/">Free CSS Templates</a>, Thanks to <a href="http://www.dubaiapartments.biz/">Dubai Apartments</a></div>
      <br className="spacer" />
    </div>
  )
};
