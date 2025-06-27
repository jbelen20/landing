import React from 'react'
import { LogoMenu, ContainNavbar } from '../style/NavbarSc'
import styled from 'styled-components'

export default function Navbar() {

  const scrolling = () => {
    window.scrollBy({ top: 620, left: 0, behavior: 'smooth' })
  }

  return (
    <ContainNavbar>
      <ButtonsContainer>
        <Buttons>Home</Buttons>
        <Buttons onClick={scrolling} >Productos</Buttons>
        <Buttons>Promos</Buttons>
        <Buttons>Nosotros</Buttons>
        <Buttons>Suscursales</Buttons>
        <Buttons>Contacto</Buttons>
      </ButtonsContainer>
      <LogoMenu xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </LogoMenu>
    </ContainNavbar>
  )
}

const Buttons = styled.button`
  background: #D40404;
  padding: 0;
  height: 6vh;
  color: #fff;
  margin: 1rem;
  padding: 0 1rem;
  font-weight: 400;
  `
  const ButtonsContainer = styled.div`
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-between;
  `