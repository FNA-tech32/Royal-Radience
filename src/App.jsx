import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery/>
      <Reviews/>
      <Booking/>
      <Footer/>
      <WhatsAppButton/>
    </>
  )

}

export default App;