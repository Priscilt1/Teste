import React, { useState, useEffect } from 'react'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Counter from '../Counter'
import InputTextArea from '../InputTextArea'
import { Content } from './form.styled'
import { useForm } from '../../context/useForm'

export const Form = () => {
  const { updateEvent, event } = useForm()
  const [counterInvalid, setCounterInvalid] = useState(false) 

  const handleSubmit = () => {
    if (event.sticker === 0) {
      setCounterInvalid(true)
    }   
  }

  useEffect(()=>{
    if(event.sticker !== 0){
      setCounterInvalid(false)
    }
  },[event.sticker])

  return (
    <>
      <Content>
        <Checkbox label='React' onChange={(e: boolean)  => updateEvent({ react: !event.react })} checked={event.react} />        
        <Checkbox label='Vue' onChange={(e: boolean)  => updateEvent({ vue: !event.vue })} checked={event.vue} />
        <Checkbox label='Angular' onChange={(e: boolean)  => updateEvent({ angular: !event.angular })} checked={event.angular} />
        <Counter isInvalid={counterInvalid} />
        <InputTextArea />
      </Content>
      <Button text='ENVIAR' onClick={handleSubmit} />
    </>
  )
}
