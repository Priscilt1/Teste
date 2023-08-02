import { React } from 'react'
export interface IForm {
  readonly react: boolean
  readonly vue: boolean
  readonly angular: boolean
  readonly sticker: number
  readonly text: string
  readonly success: boolean
}
export interface IFormContext {
  readonly children?: React.ReactNode
}