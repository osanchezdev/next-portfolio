'use client'
import { useContext } from "react"
import { IntersectionContext } from "../../../context/intersectionContext"
import MaxWidth from "../../shared/MaxWidth/MaxWidth.component"
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
      id="projects-section"
      initial={"initial"}
      animate={inView && "show"}
      variants={projectsSectionVariants}
    >
      <MaxWidth>
        <ProjectsSectionTitle variants={projectsSectionVariants}>
          Developer portfolio
        </ProjectsSectionTitle>
        <ProjectsSectionDescription variants={projectsSectionVariants}>
          I’ve had the privilege of working with companies and individuals from around the world. Currently, I work remotely as a freelancer, collaborating with a select group of clients while staying open to exciting new opportunities.
          <br />
          Below, you’ll find some of the projects I’ve had the chance to contribute to:
        </ProjectsSectionDescription>
        <ProjectsSectionGalleryWrapper variants={projectsSectionVariants}>
          <ProjectsGallery />
        </ProjectsSectionGalleryWrapper>
      </MaxWidth>
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
