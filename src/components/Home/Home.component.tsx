'use client'
import { FC } from "react"
import dynamic from "next/dynamic"
import { Scrollbar } from 'react-scrollbars-custom';
import WelcomeSection from "./WelcomeSection/WelcomeSection.component"
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

const Home: FC = () => {
  return (
    <Scrollbar style={{ height: '100vh' }}>
      <WelcomeSection />
      {PAGE_SECTIONS.map(({ key, component }) => (
        <IntersectionProvider key={key}>
          <Divider margin="3rem auto 5rem auto" />
          {component}
        </IntersectionProvider>
      ))}
    </Scrollbar>
  )
}

export default Home
