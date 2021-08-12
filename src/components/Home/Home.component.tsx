import React from "react"
import dynamic from "next/dynamic"
import { Scrollbars } from "react-custom-scrollbars-2"
import WelcomeSection from "./WelcomeSection/WelcomeSection.component"
// import AboutSection from "./AboutSection/AboutSection.component"
// import ProjectsSection from "./ProjectsSection/ProjectsSection.component"
// import ContactSection from "./ContactSection/ContactSection.component"
import { IntersectionProvider } from "../../context/intersectionContext"
import Divider from "../shared/Divider/Divider.component"

const DynamicProjectsSection = dynamic(
  () => import("./ProjectsSection/ProjectsSection.component")
)

const DynamicAboutSection = dynamic(
  () => import("./AboutSection/AboutSection.component")
)

const DynamicContactSection = dynamic(
  () => import("./ContactSection/ContactSection.component")
)

const PAGE_SECTIONS = [
  {
    key: "int-projects-section",
    component: <DynamicProjectsSection />,
  },
  {
    key: "int-about-section",
    component: <DynamicAboutSection />,
  },
  {
    key: "int-contact-section",
    component: <DynamicContactSection />,
  },
]

const Home: React.FC = () => {
  return (
    <Scrollbars style={{ height: "100vh" }} universal={true}>
      <WelcomeSection />
      {PAGE_SECTIONS.map(({ key, component }) => (
        <IntersectionProvider key={key}>
          <Divider margin="3rem auto 5rem auto" />
          {component}
        </IntersectionProvider>
      ))}
    </Scrollbars>
  )
}

export default Home
