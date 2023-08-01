import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const Footer = styled.footer`
  background-color: var(--color-light-sky-blue);
  height: 6.3125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 2rem;

  span {
    color: var(--color-green-success);
    font-size: 1.125rem;
    font-weight: 600;
  }
`
