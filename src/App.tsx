import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useReducer } from 'react'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
import Header from './components/Header'
import InputTextArea from './components/InputTextArea'
import { Container, GlobalStyled, Content } from './styles/global'

export function App() {
  const [event, updateEvent] = useReducer((prev, next) => {
    return { ...prev, ...next }
  }, { react: false, vue: false, angular: false })

  return (
    <Container>
      <GlobalStyled />
      <Header />
      <Content>
        <Checkbox label='React' onChange={(e: boolean)  => updateEvent({ react: !event.react })} checked={event.react} />        
        <Checkbox label='Vue' onChange={(e: boolean)  => updateEvent({ vue: !event.vue })} checked={event.vue} />
        <Checkbox label='Angular' onChange={(e: boolean)  => updateEvent({ angular: !event.angular })} checked={event.angular} />  
        <InputTextArea />
      </Content>
  
      <Button text='SALVAR' onClick={()=>{}} />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
