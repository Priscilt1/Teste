import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import Header from './components/Header'
import { FormContextProvider } from './context/useForm'
import { Container, GlobalStyled } from './styles/global'

export function App() {
  return (
    <FormContextProvider>
      <Container>
        <GlobalStyled />
        <Header />
        <Form />
      </Container>
    </FormContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
