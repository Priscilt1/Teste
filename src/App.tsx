import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import Header from './components/Header'
import { Container, GlobalStyled } from './styles/global'

export function App() {
  return (
    <Container>
      <GlobalStyled />
      <Header />
      <Form />
    </Container>    
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
