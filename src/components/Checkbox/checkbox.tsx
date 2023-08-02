import React from 'react'
import { 
  CheckboxStyled,
  HiddenCheckbox,
  IconStyled,
  CheckboxRootContainer,
} from './checkbox.styled'
import { ICheckbox } from './interface'

const IconCheck = () => (
  <IconStyled viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </IconStyled>
)

export const Checkbox = ({ label, checked, disabled, ...props }: ICheckbox) => {
  return (
    <CheckboxRootContainer tabindex="0" >
      <HiddenCheckbox id={label} checked={checked} aria-labelledby={label} {...props} />
      <CheckboxStyled disabled={disabled} checked={checked}>
        {checked && <IconCheck />}
      </CheckboxStyled>
      <label htmlFor={label} lang={props.lang || 'pr-BR'}>{label}</label>
    </CheckboxRootContainer>
  )
}
