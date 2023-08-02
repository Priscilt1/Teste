import styled from 'styled-components'


export const LabelStyled = styled.label`
  font-size: ${props => (props.size ? props.size : '1.125rem')};
  line-height: ${props => (props.size ? props.size : '1.3rem')};
  font-weight: 700;
  color: ${props => (props.colorTitle ? props.colorTitle : 'var(--color-pine-green)')};
  margin: 1rem 0rem;
`
