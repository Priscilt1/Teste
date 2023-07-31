import React, { useReducer } from 'react'
import { ButtonStyled, CounterContainer, ContainerCounter } from './counter.styled'
import { IconMinus } from './IconMinus'
import { IconPlus } from './IconPlus'


export const Counter = () => {
  const [counter, updateCounter] = useReducer((prev, next) => {
    return { ...prev, ...next }
  }, { value: 0 })

  const isDisabled = counter.value === 0

  return (
    <ContainerCounter>
      <ButtonStyled disabled={isDisabled} onClick={() => updateCounter({ value: counter.value - 1})}>
        <IconMinus />
      </ButtonStyled>
      <CounterContainer>
        {counter.value}
      </CounterContainer>
      <ButtonStyled onClick={() => updateCounter({ value: counter.value + 1})}>
        <IconPlus />
      </ButtonStyled>
    </ContainerCounter>
  )
}
