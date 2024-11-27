import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Aside imgSrc="public/images/CookedUpLogo.webp" />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
