import React from "react"
import { Scrollbars } from "react-custom-scrollbars-2"
import AboutSection from "./AboutSection/AboutSection.component"
import WelcomeSection from "./WelcomeSection/WelcomeSection.component"
import ProjectsSection from "./ProjectsSection/ProjectsSection.component"

const Home: React.FC = () => {
  return (
    <Scrollbars style={{ height: "100vh" }} universal={true}>
      {/* <WelcomeSection /> */}
      {/* <AboutSection /> */}
      <ProjectsSection />
    </Scrollbars>
  )
}

export default Home
