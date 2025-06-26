import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>@copyrigth</FooterText>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding-bottom: 2px;
  height: 60vh
  `
const FooterText = styled.h1`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 10rem;
  `
