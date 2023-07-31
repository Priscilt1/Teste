import React from 'react'

export interface IInputTextArea {
  readonly id?: string
  readonly value?: string
  readonly placeholder?: string
  readonly handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
