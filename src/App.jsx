import Header from "./components/Header"
import Body from "./components/Body"

export default function App() {

  return (
    <div id="main">
      <Header />
      <Body />
      <div className="foot"> Copyright Information Goes Here<br />
        Designed by <a href="http://www.free-css-templates.com/">Free CSS Templates</a>, Thanks to <a href="http://www.dubaiapartments.biz/">Dubai Apartments</a></div>
      <br className="spacer" />
    </div>
  )
};
