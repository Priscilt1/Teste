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
  const [counter, updateCounter] = useReducer((prev, next) => {
    updateEvent({sticker: next.value})
    return { ...prev, ...next }
  }, { value: 0 })

  console.log(isInvalid)
  const isDisabled = counter.value === 0

  return (
    <ContainerCounter>
      <ButtonStyled disabled={isDisabled} onClick={() => updateCounter({ value: counter.value - 1})}>
        <IconMinus />
      </ButtonStyled>
      <CounterContainer isInvalid={isInvalid}>
        {counter.value}
      </CounterContainer>
      <ButtonStyled onClick={() => updateCounter({ value: counter.value + 1})}>
        <IconPlus />
      </ButtonStyled>
    </ContainerCounter>
  )
}
