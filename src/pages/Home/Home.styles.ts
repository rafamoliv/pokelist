import { theme } from '@/styles'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Box, Container } from '@chakra-ui/react'

const pokeLogoAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }

  25% {
    transform: translateX(20px) rotateY(15deg);
  }

  50% {
    transform: translateX(0px);
  }

  75% {
    transform: translateX(-20px) rotateY(-15deg);
  }

  100% {
    transform: translateX(0px);
  }
`

const leftAnimation = keyframes`
    0% {
    transform: translateX(+25px);
    opacity: 0;
  }

  50% {
    transform: translateX(+25px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`

const rightAnimation = keyframes`
  0% {
    transform: translateX(-25px);
    opacity: 0;
  }

  50% {
    transform: translateX(-25px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const Main = styled.main``

export const Section = styled.section`
  display: flex;
  height: 100vh;

  .blur {
    filter: blur(8px);
  }
`

export const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
`

export const AsideBox = styled(Box)`
  z-index: 2;
`

export const AnimationBox = styled(Box)`
  display: none;
  min-width: 40%;
  padding: 40px;
  position: relative;
  top: 4%;

  .pokemonLogoImg {
    animation: ${pokeLogoAnimation} 1s ease-in-out;
    position: absolute;
    top: -15%;
    z-index: 1;
  }

  .fireredImg {
    animation: ${leftAnimation} 1s ease-in-out;
    position: absolute;
    right: 45%;
    top: 20%;
  }

  .pikachuImg {
    animation: ${rightAnimation} 1s ease-in-out;
    position: absolute;
    left: 40%;
    top: 20%;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
  }
`
