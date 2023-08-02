import React, { useState, useEffect } from 'react'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Counter from '../Counter'
import InputTextArea from '../InputTextArea'
import { Content, Footer } from './form.styled'
import { useForm } from '../../context/useForm'
import Label from '../Label'

export const Form = () => {
  const { updateEvent, event, cleanForm } = useForm()
  const [counterInvalid, setCounterInvalid] = useState(false) 

  const handleSubmit = (e) => {
    // Here I would place the call to the endpoint
    e.preventDefault()
    if (event.sticker === 0) {
      updateEvent({
        success: false
      })
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
    <form>
      <Content>
        <Label text='Quais stickers?'/>
        <Checkbox label='React' lang='en-us' onChange={(e: boolean)  => updateEvent({ react: !event.react })} checked={event.react} />        
        <Checkbox label='Vue' lang='en-us' onChange={(e: boolean)  => updateEvent({ vue: !event.vue })} checked={event.vue} />
        <Checkbox label='Angular' lang='en-us' onChange={(e: boolean)  => updateEvent({ angular: !event.angular })} checked={event.angular} />
        <Label id='sticker' text='Quantos stickers de cada?' />
        <Counter id='sticker' isInvalid={counterInvalid} />
        <Label id='observation' text='Observações:' />
        <InputTextArea id='observation' />
      </Content>
      <Footer>
        <Button type='submit' uppercase text='enviar' onClick={handleSubmit} />
        {event.success && (
          <h3>Formulário enviado com sucesso!</h3>
        )}
      </Footer>
    </form>
  )
}
