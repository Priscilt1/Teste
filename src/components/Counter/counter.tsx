import React, { useReducer } from 'react'
import { useForm } from '../../context/useForm'
import { ButtonStyled, CounterContainer, ContainerCounter } from './counter.styled'
import { IconMinus } from './IconMinus'
import { IconPlus } from './IconPlus'

interface ICounter {
  readonly isInvalid?: boolean
}

export const Counter = ({ isInvalid }: ICounter) => {
  const { updateEvent, event } = useForm()

  const re = /^[0-9\b]+$/
  
  const maskNumber = (e) => {
    if (e.target.value === '' || re.test(e.target.value)) {
      updateEvent({sticker: e.target.value})
   }
  }

  const isDisabled = event.sticker === 0

  return (
    <ContainerCounter>
      <ButtonStyled disabled={isDisabled} onClick={() => updateEvent({ sticker: Number(event.sticker) - 1})}>
        <IconMinus />
      </ButtonStyled>
      <CounterContainer isInvalid={isInvalid}>
        <input type='text' value={event.sticker} onChange={(e)=> {maskNumber(e)}} />
      </CounterContainer>
      <ButtonStyled onClick={() => updateEvent({ sticker: Number(event.sticker) + 1})}>
        <IconPlus />
      </ButtonStyled>
    </ContainerCounter>
  )
}
