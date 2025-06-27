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
  width: 100%;
  height: 16vh;
  background: #000000;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 71%, rgba(0, 0, 0, 0.88) 84%, rgba(0, 0, 0, 0.54) 90%, rgba(0, 0, 0, 0) 96%);
  display: flex;
  justify-content: space-between;
  psition: absolute;
  z-index: 1000;
`