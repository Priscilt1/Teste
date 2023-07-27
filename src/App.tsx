import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components/Header'
import { Container, GlobalStyled } from './styles/global'

export function App() {
  return (
    <Container>
      <GlobalStyled />
      <Header />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
