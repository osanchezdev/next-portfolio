import React, { useContext } from "react"
import { IntersectionContext } from "../../../context/intersectionContext"
import ProjectsGallery from "./ProjectsGallery/ProjectsGallery.component"
import {
  ProjectsSectionWrapper,
  ProjectsSectionTitle,
  ProjectsSectionDescription,
  ProjectsSectionGalleryWrapper,
} from "./ProjectsSection.styles"
import { projectsSectionVariants } from "./ProjectsSection.variants"

const ProjectsSection = () => {
  const { inView } = useContext(IntersectionContext)
  return (
    <ProjectsSectionWrapper
      initial={"initial"}
      animate={inView && "show"}
      variants={projectsSectionVariants}
    >
      <ProjectsSectionTitle variants={projectsSectionVariants}>
        Developer portfolio
      </ProjectsSectionTitle>
      <ProjectsSectionDescription variants={projectsSectionVariants}>
        I have worked for both companies and individuals around the globe. I
        currently work remotely as a freelancer with a select client base and
        open to hearing about new opportunities.
        <br />
        <br />
        Here can you see some of the projects where i have participated:
      </ProjectsSectionDescription>
      <ProjectsSectionGalleryWrapper variants={projectsSectionVariants}>
        <ProjectsGallery />
      </ProjectsSectionGalleryWrapper>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
