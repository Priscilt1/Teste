import React from 'react'
import { LabelStyled } from './label.styled'
import { ILabel } from './interface'

export const Label = ({ text, size, colorLabel, lineSize, id }: ILabel) => (
  <LabelStyled htmlFor={id} size={size} lineSize={lineSize} colorLabel={colorLabel}>
    {text}
  </LabelStyled>
)
