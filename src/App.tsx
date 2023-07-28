import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Header from './components/Header'
import Title from './components/Title'
import { Container, GlobalStyled } from './styles/global'

export function App() {
  return (
    <Container>
      <GlobalStyled />
      <Header />
      <Button text='SALVAR' onClick={()=>{}} />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
