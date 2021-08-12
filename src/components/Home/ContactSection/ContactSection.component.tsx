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
import MaxWidth from "../../shared/MaxWidth/MaxWidth.component"

const ContactSection = () => {
  const { inView } = useContext(IntersectionContext)
  // TODO: make the animation text like a 'psst' an tiny size
  return (
    <ContactSectionWrapper
      id="contact-section"
      initial={"initial"}
      animate={inView && "show"}
      variants={contactSectionVariants}
    >
      <MaxWidth>
        <ContactSectionTextWrapper>
          <ContactSectionTitle variants={contactSectionVariants}>
            Contact
          </ContactSectionTitle>
          <ContactSectionDescription variants={contactSectionVariants}>
            Talk to me if you have a question, want a project collaboration or
            just say hi, an animation awaits at the end of the form. <br />
          </ContactSectionDescription>
        </ContactSectionTextWrapper>
        <ContactSectionFormWrapper variants={contactSectionVariants}>
          <ContactForm />
        </ContactSectionFormWrapper>
      </MaxWidth>
    </ContactSectionWrapper>
  )
}

export default ContactSection
