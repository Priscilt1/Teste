import React, { ButtonHTMLAttributes } from 'react'
export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  readonly text: string
  readonly backgroundColor?: string
  readonly colorText?: string
  readonly disabled?: false
  readonly border?: string
  readonly hoverBackgroundColor?: string
  readonly hoverBorder?: string
  readonly hoverTextColor?: string
  readonly onClick: (event: React.MouseEvent<HTMLElement> | string) => void
  readonly type?: 'submit' | 'reset' | 'button' | undefined
  readonly uppercase?: boolean
}
