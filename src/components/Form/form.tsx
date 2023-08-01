import React, { useState, useEffect } from 'react'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Counter from '../Counter'
import InputTextArea from '../InputTextArea'
import { Content, Footer } from './form.styled'
import { useForm } from '../../context/useForm'
import Title from '../Title'

export const Form = () => {
  const { updateEvent, event, cleanForm } = useForm()
  const [counterInvalid, setCounterInvalid] = useState(false) 

  const handleSubmit = () => {
    if (event.sticker === 0) {
      setCounterInvalid(true)
    } else {
      updateEvent({
        success: true
      })
      cleanForm()
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
        <Title text='Quais stickers?'/>
        <Checkbox label='React' onChange={(e: boolean)  => updateEvent({ react: !event.react })} checked={event.react} />        
        <Checkbox label='Vue' onChange={(e: boolean)  => updateEvent({ vue: !event.vue })} checked={event.vue} />
        <Checkbox label='Angular' onChange={(e: boolean)  => updateEvent({ angular: !event.angular })} checked={event.angular} />
        <Title text='Quantos stickers de cada?' />
        <Counter isInvalid={counterInvalid} />
        <Title text='Observações:' />
        <InputTextArea />
      </Content>
      <Footer>
        <Button text='ENVIAR' onClick={handleSubmit} />
        {event.success && (
          <span>Formulário enviado com sucesso!</span>
        )}
      </Footer>
    </>
  )
}
