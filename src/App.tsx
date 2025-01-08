import Footer from "./components/Footer"
import About from "./pages/About"
import Home from "./pages/Home"


const App = () => {
  return (
    <div className="flex flex-col gap-12">
     <Home /> 
     <About />
     <Footer />
    </div>
  )
}

export default App
