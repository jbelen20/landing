import bg from '../assets/image/sushi.avif'
import styled from 'styled-components'
import WordCarousel from './WordCarousel'

export default function Home() {
  return (
    <div>
      <ContainerBg src={bg} />
      <h1>Title Template</h1>
       <WordCarousel />
       {/* <button>Click Me</button> */}
    </div>
  )
}

const Title = styled.h1`
  position: absolute;
  top: 20%;
`

const ContainerBg = styled.img`
  top: -3rem;
  position: relative;
  z-index: -1;
  width: 100%;
  height: 90vh;
  object-fit:  cover;
  boerder: solid 1px red
`
