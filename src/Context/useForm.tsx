import React, { createContext, useReducer } from 'react'
import { IForm } from './interface'

const initialValues = {
  react: false,
  vue: false,
  angular: false,
  sticker: 0,
  text: '',
}

const FormContext = createContext<IForm>(initialValues)

export const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [event, updateEvent] = useReducer((prev, next) => {
    return { ...prev, ...next }
  }, { ...initialValues})

  const value = {
    event,
    updateEvent
  }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext