import React from 'react'
import { LogoMenu, ContainNavbar, ContainMove, Buttons, ButtonsContainer} from '../style/NavbarSc'

export default function Navbar() {

  const scrolling = () => {
    window.scrollBy({ top: 520, left: 0, behavior: 'smooth' })
  }

  return (
    <ContainMove>
    <ContainNavbar>
      <ButtonsContainer>
        <Buttons>Home</Buttons>
        <Buttons onClick={scrolling} >Productos</Buttons>
        <Buttons onClick={scrolling} >Promos</Buttons>
        <Buttons>Nosotros</Buttons>
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

