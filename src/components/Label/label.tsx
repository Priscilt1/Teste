import React from 'react'
import { LabelStyled } from './label.styled'
import { ILabel } from './interface'

export const Label = ({ text, size, colorTitle, lineSize, id }: ILabel) => (
  <LabelStyled htmlFor={id} size={size} lineSize={lineSize} colorTitle={colorTitle}>
    {text}
  </LabelStyled>
)
