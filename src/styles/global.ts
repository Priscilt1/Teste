import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
@import url("https://rsms.me/inter/inter.css");

 :root {
    --color-white:#FFFFFF;
    --color-rebecca-purple: #663399;
    --color-very-light-pink: #F2F2F2;
    --color-dark-grey-blue: #2F3676;
    --color-dark-blue-grey: #191847;
    --color-pine-green: #071723;
    --color-light-sky-blue: #DDE3E9;
    --color-light-grey: #C5CFD6;
    --color-greyish-brown: #555555;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-rebecca-purple);
    color: var(--color-pine-green);
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-size: 0.750rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const Container = styled.main`
  background-color: var(--color-very-light-pink);
  border-radius: 8px;
  box-shadow: 10px 22px 34px 0 rgba(0, 0, 0, 0.5);
  margin: 20px auto;
  overflow: hidden;
  width: 560px;

  @media only screen and (max-width: 560px) {
    margin: 0 auto;
    border-radius: 0px;
  }
`
