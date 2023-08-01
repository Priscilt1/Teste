import React, { createContext, useReducer, useContext } from 'react'
import { IForm } from './interface'

const initialValues = {
  react: false,
  vue: false,
  angular: false,
  sticker: 0,
  text: '',
}

export const FormContext = createContext<IForm>(initialValues)

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

export const useForm = () => {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useForm must be used within a formProvider')
  }

  return context
}
