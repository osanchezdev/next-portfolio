import React from "react"
import ProjectsGallery from "./ProjectsGallery/ProjectsGallery.component"
import {
  ProjectsSectionWrapper,
  ProjectsSectionTitle,
  ProjectsSectionDescription,
} from "./ProjectsSection.styles"

const ProjectsSection = () => {
  return (
    <ProjectsSectionWrapper>
      <ProjectsSectionTitle>Developer portfolio</ProjectsSectionTitle>
      <ProjectsSectionDescription>
        Animi id maxime dolores molestiae sint animi quo. Non maxime in illo ut
        repellendus et quae. Est eum et libero dolorem. Dolorem corporis ex
        placeat accusamus enim nihil dolor. Quas esse quia atque eum omnis et
        exercitationem. Ullam qui deleniti non totam veniam nihil quo.
        Consequatur deleniti voluptate enim non laboriosam distinctio voluptate
        voluptate illo.
      </ProjectsSectionDescription>
      <ProjectsGallery />
    </ProjectsSectionWrapper>
  )
}

export default ProjectsSection
