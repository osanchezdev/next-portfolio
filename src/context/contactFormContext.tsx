import React, { createContext, useState } from "react"
import { IContactFormValues } from "../../types"

interface IContactFormContext {
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
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [currentForm, setCurrentForm] = useState<IContactFormValues>({})

  const sendContactMessage = async () => {
    // TODO: Create AWS SES service an comsume it
  }

  const updateCurrentForm = async (
    data: IContactFormValues,
    newStep: number
  ) => {
    setCurrentForm({ ...currentForm, ...data })
    if (newStep === 3) {
      await sendContactMessage()
    }
    setCurrentStep(newStep)
  }
  return (
    <ContactFormContext.Provider
      value={{
        currentStep,
        updateCurrentForm,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}

export default ContactFormProvider
