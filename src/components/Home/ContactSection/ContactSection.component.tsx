'use client'
import { useContext } from "react"
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
          Got a question, a project idea, or just want to say hello? Fill out the form below, and don’t miss the surprise animation waiting for you at the end!<br />
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
