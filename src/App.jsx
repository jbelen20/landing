
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Highlights from './components/Highlight'
import Carousel from './components/carouselRef'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Home />
    <Highlights />
    <Carousel />
    <Highlights />
    <Carousel />
    <Footer />
    </>
  )
}

export default App
