import React from "react"
import { AnimatePresence } from "framer-motion"
import ProjectItem from "./ProjectItem/ProjectItem.component"

import { PROJECTS_DATA } from "../../../../data/projects_data"

import {
  projectsGalleryItemWrapperVariants,
  projectsGalleryWrapperVariants,
} from "./ProjectsGallery.variants"

import {
  ProjectsGalleryWrapper,
  ProjectsGalleryItemWrapper,
} from "./ProjectsGallery.styles"

const ProjectsGallery = () => {
  return (
    <ProjectsGalleryWrapper
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={projectsGalleryWrapperVariants}
    >
      <AnimatePresence key="gallery-wrapper" presenceAffectsLayout>
        {PROJECTS_DATA.map(item => (
          <ProjectsGalleryItemWrapper
            key={item.id}
            variants={projectsGalleryItemWrapperVariants}
          >
            <ProjectItem projectItem={item} />
          </ProjectsGalleryItemWrapper>
        ))}
      </AnimatePresence>
    </ProjectsGalleryWrapper>
  )
}

export default ProjectsGallery
