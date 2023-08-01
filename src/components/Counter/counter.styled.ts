import styled from "styled-components"


export const ContainerCounter = styled.div`
  display: flex;
`

export const ButtonStyled = styled.button`
  all: unset;
  font-weight: 700;
  border-radius: 8px;
  cursor: ${props => (props.disabled ? 'not-allowed': 'pointer')};;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  color: white;
  height: 2.625rem;
  width: 2.625rem;
  align-items: center;

  svg {
    fill: ${props => (props.disabled ? 'var(--color-light-grey)': 'var(--color-dark-grey-blue)')};

    &:hover {
      fill: ${props => (props.disabled ? 'var(--color-light-grey)': 'var(--color-dark-blue-grey)')};
    }
  }  
`

export const CounterContainer = styled.label`
  input {
    border-radius: 0.25rem;
    border: 1px solid var(--color-dark-grey-blue);
    border: ${props => (props.isInvalid ? '1px solid var(--color-red-error)': '1px solid var(--color-dark-grey-blue)')};
    background: ${props => (props.isInvalid ? 'var(--color-background-error)': 'var(--color-light-sky-blue)')};
    width: 3.75rem;
    height: 2.625rem;
    flex-shrink: 0;
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-pine-green);
    font-size: 1.25063rem;
    font-weight: 700;
    text-align: center;
  }
`
