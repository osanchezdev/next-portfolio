import React, { useContext } from "react"
import { IntersectionContext } from "../../../context/intersectionContext"
import ContactForm from "./ContactForm/ContactForm.component"
import { contactSectionVariants } from "./ContactSection.variants"
import {
  ContactSectionWrapper,
  ContactSectionTextWrapper,
  ContactSectionTitle,
  ContactSectionDescription,
  ContactSectionFormWrapper,
} from "./ContactSection.styles"

const ContactSection = () => {
  const { inView } = useContext(IntersectionContext)
  return (
    <ContactSectionWrapper
      initial={"initial"}
      animate={inView && "show"}
      variants={contactSectionVariants}
    >
      <ContactSectionTextWrapper>
        <ContactSectionTitle variants={contactSectionVariants}>
          Contact
        </ContactSectionTitle>
        <ContactSectionDescription variants={contactSectionVariants}>
          Talk to me is you have a question, want a project collaboration or
          just say hi, an animation awaits at the end of the form. <br />
        </ContactSectionDescription>
      </ContactSectionTextWrapper>
      <ContactSectionFormWrapper variants={contactSectionVariants}>
        <ContactForm />
      </ContactSectionFormWrapper>
    </ContactSectionWrapper>
  )
}

export default ContactSection
