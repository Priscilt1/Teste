import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { IForm } from './interface'

const initialValues = {
  react: false,
  vue: false,
  angular: false,
  sticker: 0,
  text: '',
  success: false,
}

export const FormContext = createContext<IForm>(initialValues)

export const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [event, updateEvent] = useReducer((prev, next) => {
    return { ...prev, ...next }
  }, { ...initialValues})

  useEffect(() => {
    const valuesInitialReset = event.angular || event.react || event.vue || event.sticker > 0 || event.text.length > 0
    if (valuesInitialReset && event.success) {
      updateEvent({
        success: false
      })
    }
  }, [event])

  const cleanForm = () => {
    updateEvent({
      ...initialValues,
      success: true,
    })
  }

  const value = {
    event,
    updateEvent,
    cleanForm
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
