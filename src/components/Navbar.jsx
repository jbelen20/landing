import React from 'react'
import { LogoMenu, ContainNavbar, ContainMove, Buttons, ButtonsContainer} from '../style/NavbarSc'

export default function Navbar() {

function ScrollButton({ scrollAmount }) {
  const handleClick = () => {
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });
  };

  return <button onClick={handleClick}>Scroll {scrollAmount}px</button>;
}

  return (
    <ContainMove>
    <ContainNavbar>
      <ButtonsContainer>
        <Buttons>Home</Buttons>
        {/* <Buttons onClick={scrolling} >Productos</Buttons>
        <Buttons onClick={scrolling} >Promos</Buttons> */}
        <ScrollButton scrollAmount={650} />
        <Buttons >Nosotros <ScrollButton scrollAmount={900} /></Buttons>
        <Buttons>Suscursales</Buttons>
        <Buttons>Contacto</Buttons>
      </ButtonsContainer>
      <LogoMenu xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </LogoMenu>
    </ContainNavbar>
    </ContainMove>
  )
}

