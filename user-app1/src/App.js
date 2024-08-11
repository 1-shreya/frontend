
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToActions";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  );
}

export default App;
