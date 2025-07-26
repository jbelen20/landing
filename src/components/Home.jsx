import bg from '../assets/image/Dashi.jpg'
import styled from 'styled-components'
import WordCarousel from './WordCarousel'

export default function Home() {
  return (
    <ContentHome>
      <ContainerBg src={bg} />
      <Title top='18%' fs='2rem' ml='59rem'>Sushi</Title>
      <Title>美味しい</Title>
      <WordCarousel />
    </ContentHome>
  )
}

const ContentHome = styled.div`
 height: 90vh;
 margin: 10rem;
 width: 100%;
`

const Title = styled.h1`
  position: absolute;
  top: ${props => props.top || '20%'};
  margin-left: ${props => props.ml || '51rem'};
  color: #fff;
  font-size: ${props => props.fs || '6rem'};
  text-shadow: 4px 4px black;
`

const ContainerBg = styled.img`
  top: -2rem;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit:  cover;
  boerder: solid 1px red
`
