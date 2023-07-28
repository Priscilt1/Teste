import styled from 'styled-components'


export const ContainerStyled = styled.h1`
  font-size: ${props => (props.size ? props.size : '1.125rem')};
  line-height: ${props => (props.size ? props.size : '1.3rem')};
  font-weight: 700;
  color: ${props => (props.colorTitle ? props.colorTitle : 'var(--color-pine-green)')};
`
