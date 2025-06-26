import React, { useEffect, useRef } from "react"
import styled from "styled-components"

const names = [
  "Ana", "Luis", "Carlos", "Marta", "Pedro",
  "Laura", "Sofía", "Diego", "Valentina", "Tomás"
]

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f4f6;
`

const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px;
  width: 80%;
  scroll-behavior: smooth;

  /* Hide scrollbar (cross-browser) */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const NameCard = styled.div`
  min-width: 120px;
  flex-shrink: 0;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`

export default function App() {
  const carouselRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const el = carouselRef.current

        el.scrollBy({
          left: 150,
          behavior: "smooth"
        })

        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
          el.scrollTo({ left: 0, behavior: "smooth" })
        }
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <CarouselWrapper ref={carouselRef}>
        {names.map((name, index) => (
          <NameCard key={index}>{name}</NameCard>
        ))}
      </CarouselWrapper>
    </Container>
  )
}
