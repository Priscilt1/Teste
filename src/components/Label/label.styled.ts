import styled from 'styled-components'


export const LabelStyled = styled.label`
  font-size: ${props => (props.size ? props.size : '1.125rem')};
  line-height: ${props => (props.lineSize ? props.lineSize : '1.3rem')};
  font-weight: 700;
  color: ${props => (props.colorLabel ? props.colorLabel : 'var(--color-pine-green)')};
  margin: 1rem 0rem;
`
