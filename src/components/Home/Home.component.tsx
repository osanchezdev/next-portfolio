'use client'
import { FC, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import WelcomeSection from "./WelcomeSection/WelcomeSection.component"
import { IntersectionProvider } from "../../context/intersectionContext"
import Divider from "../shared/Divider/Divider.component"

const Scrollbar = dynamic(() => import("react-custom-scrollbars-2"))

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
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

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
