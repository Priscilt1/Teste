import React from 'react'
import { ButtonStyled } from './styled'

interface IButton {
  readonly text: string
  readonly backgroundColor?: string
  readonly colorText?: string
  readonly disabled?: false
  readonly border?: string
  readonly hoverBackgroundColor?: string
  readonly hoverBorder?: string
  readonly hoverTextColor?: string
  readonly onClick: (event: React.MouseEvent<HTMLElement> | string) => void
}

export const Button = ({ text, backgroundColor, colorText, disabled, border, hoverBackgroundColor, hoverBorder, hoverTextColor }: IButton) => {
  return (
    <ButtonStyled 
      backgroundColor={backgroundColor} 
      colorText={colorText}
      disabled={disabled}
      border={border}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBorder={hoverBorder}
      hoverTextColor={hoverTextColor}
      onClick={onclick}
    >
      {text}
    </ButtonStyled>
  )
}
