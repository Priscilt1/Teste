import React from 'react'
import { ButtonStyled } from './button.styled'
import { IButton } from './interface'

export const Button = ({ text, backgroundColor, colorText, disabled, border, hoverBackgroundColor, hoverBorder, hoverTextColor, onClick }: IButton) => {
  return (
    <ButtonStyled 
      backgroundColor={backgroundColor} 
      colorText={colorText}
      disabled={disabled}
      border={border}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverBorder={hoverBorder}
      hoverTextColor={hoverTextColor}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  )
}
