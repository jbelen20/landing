
import styled from 'styled-components'; 

export const LogoMenu = styled.svg`
 width: 24px;
 margin-right : 3rem;
 &:hover {
   cursor: pointer;
   transform: scale(1.2);
 }
`

export const ContainNavbar = styled.div`
  width: 8rem;
  background: #000000;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 71%, rgba(0, 0, 0, 0.88) 84%, rgba(0, 0, 0, 0.54) 90%, rgba(0, 0, 0, 0) 96%);
  display: flex;
  justify-content: space-between;
  height: 100vh;
  top: 0;
  position: relative;
  `
  
  export const ContainMove = styled.div`
  top: 0;
  position: fixed;
  z-index: 10000000;
  `

  export const Buttons = styled.button`
  background: #D40404;
  padding: 0;
  height: 6vh;
  color: #fff;
  margin: 1rem;
  padding: 0 1rem;
  font-weight: 400;
  `
  
  export const ButtonsContainer = styled.div`
  height: 16vh;
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-between;
  `