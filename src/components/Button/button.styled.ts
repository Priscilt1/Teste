import styled from "styled-components"


export const ButtonStyled = styled.button`
  all: unset;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'var(--color-dark-grey-blue)')};
  font-size: 1.125rem;
  color: ${props => (props.colorText ? props.colorText : 'var(--color-white)')};
  font-weight: 700;
  border-radius: 0.4375rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  padding: 8px 32px;
  border: ${props => (props.border ? props.border : '2px solid var(--color-dark-grey-blue)')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalize')};

  &:disabled {
    border: 2px solid var(--color-greyish-brown);
    background-color: var(--color-light-grey);
    color: var(--color-greyish-brown);
    cursor: not-allowed;
  }

  /* Thinking about accessibility, talking about the possibility of placing a white border when the button was in focus, improving sharpness */
  &:hover,
  &:active,
  &:focus {
    border: ${props => (props.border ? props.border : '2px solid var(--color-dark-grey-blue)')};
    background-color: ${props => (props.hoverBackgroundColor ? props.hoverBackgroundColor : 'var(--color-dark-blue-grey)')};
  }
`
