import React from 'react'
import { ContainerStyled } from './title.styled'
import { ITitle } from './interface'

export const Title = ({ text, size, colorTitle, lineSize }: ITitle) => (
  <ContainerStyled size={size} lineSize={lineSize} colorTitle={colorTitle}>
    {text}
  </ContainerStyled>
)
