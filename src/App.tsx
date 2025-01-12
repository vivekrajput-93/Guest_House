import Footer from "./components/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import "remixicon/fonts/remixicon.css";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <div className="flex flex-col gap-12">
     <Home /> 
     <About />
     <Rooms />
     <Services />
     <Gallery />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
