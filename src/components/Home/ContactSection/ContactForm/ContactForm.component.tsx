import React, { useContext } from "react"

import { ContactFormContext } from "../../../../context/contactFormContext"

import { CurrentStepWrapper, ContactFormWrapper } from "./ContactForm.styles"
import NameForm from "./FormSteps/NameForm.component"
import EmailForm from "./FormSteps/EmailForm.component"
import MessageForm from "./FormSteps/MessageForm.component"
import CompletedForm from "./FormSteps/CompletedForm.component"
import { AnimatePresence } from "framer-motion"
import {
  IEmailFormValue,
  IMessageFormValue,
  INameFormValue,
} from "../../../../../types"

const ContactForm = () => {
  const { loading, currentStep, updateCurrentForm } =
    useContext(ContactFormContext)
  const updateFormByStep = (
    data: INameFormValue | IEmailFormValue | IMessageFormValue,
    step?: number
  ) => updateCurrentForm(data, step || currentStep - 1)

  const renderCurrentFormStep = () => {
    switch (currentStep) {
      case 0:
      default:
        return <NameForm key="name-form" updateForm={updateFormByStep} />
      case 1:
        return <EmailForm key="email-form" updateForm={updateFormByStep} />
      case 2:
        return (
          <MessageForm
            key="message-form"
            updateForm={updateFormByStep}
            loading={loading}
          />
        )
      case 3:
        return <CompletedForm key="complete-form" />
    }
  }

  return (
    <ContactFormWrapper>
      <CurrentStepWrapper>
        <AnimatePresence>{renderCurrentFormStep()}</AnimatePresence>
      </CurrentStepWrapper>
    </ContactFormWrapper>
  )
}

export default ContactForm
