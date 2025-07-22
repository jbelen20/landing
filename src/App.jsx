
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Highlights from './components/Highlight'
import Carousel from './components/carouselRef'
import Footer from './components/Footer'
import styled from 'styled-components'

function App() {

  return (
    <>
    <Navbar/>
    <Home />

    <Text>rolls</Text>
    <Highlights />
    <Carousel />

    <Text>promociones</Text>
    <Highlights />
    <Carousel />
    <Footer />
    </>
  )
}

export default App


const Text = styled.h1`
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`