import React from 'react'
import { TextAreaStyled } from './inputTextArea.styled'
import { IInputTextArea } from './interface'

export const InputTextArea = ({ id, value, ...props }: IInputTextArea) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handleChange(event)
  }
  
  return (
    <TextAreaStyled value={value} id={id} onChange={handleOnChange} {...props} />
  )
}
