import React from 'react'

export interface IButton {
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
