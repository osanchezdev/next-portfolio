import React from "react"
import ContactForm from "./ContactForm/ContactForm.component"
import {
  ContactSectionWrapper,
  ContactSectionTextWrapper,
  ContactSectionTitle,
  ContactSectionDescription,
  ContactSectionFormWrapper,
} from "./ContactSection.styles"

const ContactSection = () => {
  return (
    <ContactSectionWrapper>
      <ContactSectionTextWrapper>
        <ContactSectionTitle>Contact</ContactSectionTitle>
        <ContactSectionDescription>
          Talk to me is you have a question, want a project collaboration or
          just say hi, an animation awaits at the end of the form. <br />
        </ContactSectionDescription>
      </ContactSectionTextWrapper>
      <ContactSectionFormWrapper>
        <ContactForm />
      </ContactSectionFormWrapper>
    </ContactSectionWrapper>
  )
}

export default ContactSection
