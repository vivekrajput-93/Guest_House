import Footer from "./components/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import "remixicon/fonts/remixicon.css";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";



const App = () => {
  return (
    <div className="flex flex-col gap-12">
     <Home /> 
     <About />
     <Rooms />
     <Services />
     <Footer />
    </div>
  )
}

export default App
