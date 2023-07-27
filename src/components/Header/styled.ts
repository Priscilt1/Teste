import styled from "styled-components";
import backgroundHeader from '../../images/background-header.svg'

export const HeaderContainer = styled.header`
  background: url(${backgroundHeader}) center no-repeat;
  background-size: cover;
  height: 187px;
  padding: 23px 36px;
  width: 100%;
`

export const SubTitle = styled.h2`
  color: var(--color-white);
  font-weight: 200;
  font-size: 1.45rem;
  width: 220px;
  line-height: 1.7rem;
`

export const Title = styled.h1`
  font-weight: 700;
  line-height: 2.185rem;
  font-size: 1.5rem;
  color: var(--color-white);
`
