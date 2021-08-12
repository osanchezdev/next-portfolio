import React, { createContext, useState } from "react"
import { IContactFormValues } from "../../types"
import { axios } from "../config/axios"

interface IContactFormContext {
  loading: boolean
  currentStep: number
  updateCurrentForm: Function
  currentForm?: IContactFormValues
}

export const ContactFormContext = createContext({} as IContactFormContext)

interface ContactFormProviderProps {
  children: React.ReactNode
}

const ContactFormProvider = ({
  children,
}: ContactFormProviderProps): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [currentForm, setCurrentForm] = useState<IContactFormValues>({})

  const sendContactMessage = async (completeForm: IContactFormValues) => {
    setLoading(true)
    try {
      await axios.post("", completeForm)
      setLoading(false)
      return
    } catch (error) {
      // TODO: Implement error state to show error animation
      setLoading(false)
      console.log("err", error)
    }
  }

  const updateCurrentForm = async (
    data: IContactFormValues,
    newStep: number
  ) => {
    if (newStep === 3) {
      await sendContactMessage({ ...currentForm, ...data })
    }
    setCurrentForm({ ...currentForm, ...data })
    setCurrentStep(newStep)
  }

  return (
    <ContactFormContext.Provider
      value={{
        loading,
        currentStep,
        updateCurrentForm,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}

export default ContactFormProvider
