import {InputHTMLAttributes} from 'react'

export interface ICheckbox extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  readonly label?: string
  readonly checked: false
  readonly disabled?: false
  readonly error?: false
}
