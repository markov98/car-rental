import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from "./contexts/AuthContext";
import './App.css';

export default function App() {

  return (
    <AuthContextProvider>
      <div id="main">
        <Header />
        <Body />
        <Footer />
      </div>
    </AuthContextProvider>
  )
};
