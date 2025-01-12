'use client'
import { ReactElement, useContext } from "react"
import LazyImage from "../../../../shared/LazyImage/LazyImage.component"
import { FullScreenSliderContext } from "../../../../../context/fullScreenSliderContext"

import {
  projectItemOverlayVariants,
  projectItemSeeMoreVariants,
  projectItemTechPillsWrapperVariants,
  projectItemTechPillVariants,
} from "./ProjectItem.variants"
import { IProjectDataItem } from "../../../../../../types"

import {
  ProjectItemWrapper,
  ProjectItemHeaderWrapper,
  ProjectItemHeader,
  ProjectItemImageWrapper,
  ProjectItemOverlay,
  ProjectItemTechPillsWrapper,
  ProjectItemTechPill,
  ProjectItemSeeMore,
  ProjectItemOverlayWrapper,
} from "./ProjectItem.styles"

interface ProjectItemProps {
  projectItem: IProjectDataItem
}

const ProjectItem = ({ projectItem }: ProjectItemProps): ReactElement => {
  const { name, tech_skills, images, $bgColor, $textColor } = projectItem
  const { toggleShowSlider, setSliderImages } = useContext(
    FullScreenSliderContext
  )
  return (
    <ProjectItemWrapper
      initial={"initial"}
      animate={"animate"}
      whileHover={"hover"}
      onTap={() => {
        setSliderImages(images)
        toggleShowSlider()
      }}
    >
      <ProjectItemHeaderWrapper $bgColor={$bgColor} $textColor={$textColor}>
        <ProjectItemHeader>{name}</ProjectItemHeader>
      </ProjectItemHeaderWrapper>
      <ProjectItemImageWrapper>
        <LazyImage
          src={
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require(`../../../../../assets/images/projects/${images[0]}.jpg`)
              .default
          }
          height={200}
          width={343}
          fit="cover"
          layout="intrinsic"
          alt={name}
        />
      </ProjectItemImageWrapper>
      <ProjectItemOverlayWrapper>
        <ProjectItemOverlay variants={projectItemOverlayVariants}>
          <ProjectItemTechPillsWrapper
            variants={projectItemTechPillsWrapperVariants}
          >
            {tech_skills.map((techItem, index) => (
              <ProjectItemTechPill
                key={`${name}-${techItem.key}-${index}`}
                variants={projectItemTechPillVariants}
              >
                {techItem.text}
              </ProjectItemTechPill>
            ))}
          </ProjectItemTechPillsWrapper>
          <ProjectItemSeeMore
            variants={projectItemSeeMoreVariants}
            onClick={() => {
              setSliderImages(images)
              toggleShowSlider()
            }}
          >
            See more
          </ProjectItemSeeMore>
        </ProjectItemOverlay>
      </ProjectItemOverlayWrapper>
    </ProjectItemWrapper>
  )
}

export default ProjectItem
