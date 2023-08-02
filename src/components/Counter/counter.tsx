import React from 'react'
import { useForm } from '../../context/useForm'
import { ButtonStyled, CounterContainer, ContainerCounter } from './counter.styled'
import { IconMinus } from './IconMinus'
import { IconPlus } from './IconPlus'

interface ICounter {
  readonly isInvalid?: boolean
  readonly id?: string
}

export const Counter = ({ isInvalid, id }: ICounter) => {
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
      <ButtonStyled type="button" disabled={isDisabled} onClick={() => updateEvent({ sticker: Number(event.sticker) - 1})}>
        <IconMinus />
      </ButtonStyled>
      <CounterContainer aria-invalid={isInvalid} $isInvalid={isInvalid}>
        <input id={id} type='text' value={event.sticker} onChange={(e)=> {maskNumber(e)}} />
      </CounterContainer>
      <ButtonStyled type="button" onClick={() => updateEvent({ sticker: Number(event.sticker) + 1})}>
        <IconPlus />
      </ButtonStyled>
    </ContainerCounter>
  )
}
