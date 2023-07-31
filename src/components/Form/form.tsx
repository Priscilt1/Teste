import React, { useReducer } from 'react'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Counter from '../Counter'
import InputTextArea from '../InputTextArea'
import { Content } from './form.styled'

export const Form = () => {
  const [event, updateEvent] = useReducer((prev, next) => {
    return { ...prev, ...next }
  }, { react: false, vue: false, angular: false })

  return (
    <>
      <Content>
        <Checkbox label='React' onChange={(e: boolean)  => updateEvent({ react: !event.react })} checked={event.react} />        
        <Checkbox label='Vue' onChange={(e: boolean)  => updateEvent({ vue: !event.vue })} checked={event.vue} />
        <Checkbox label='Angular' onChange={(e: boolean)  => updateEvent({ angular: !event.angular })} checked={event.angular} />
        <Counter />
        <InputTextArea />
      </Content>

      <Button text='ENVIAR' onClick={()=>{}} />
    </>
  )
}
