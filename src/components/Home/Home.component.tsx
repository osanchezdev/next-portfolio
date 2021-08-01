import React from "react"
import { Scrollbars } from "react-custom-scrollbars-2"
import AboutSection from "./AboutSection/AboutSection.component"
import WelcomeSection from "./WelcomeSection/WelcomeSection.component"
import ProjectsSection from "./ProjectsSection/ProjectsSection.component"
import ContactSection from "./ContactSection/ContactSection.component"
import { IntersectionProvider } from "../../context/intersectionContext"
import Divider from "../shared/Divider/Divider.component"

const PAGE_SECTIONS = [
  {
    key: "int-about-section",
    component: <AboutSection />,
  },
  {
    key: "int-projects-section",
    component: <ProjectsSection />,
  },
  {
    key: "int-contact-section",
    component: <ContactSection />,
  },
]

const Home: React.FC = () => {
  return (
    <Scrollbars style={{ height: "100vh" }} universal={true}>
      <WelcomeSection />
      {PAGE_SECTIONS.map(({ key, component }) => (
        <IntersectionProvider key={key}>
          <Divider marginRem={6} />
          {component}
        </IntersectionProvider>
      ))}
    </Scrollbars>
  )
}

export default Home
