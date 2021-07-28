import { motion } from "framer-motion"
import { getContrast, invert, readableColor } from "polished"
import styled from "styled-components"

export const ProjectItemWrapper = styled(motion.div)`
  min-width: 343px;
  position: relative;
  box-shadow: 5px 6px 8px 0px rgba(0, 0, 0, 0.45);
`
interface ProjectItemHeaderWrapperProps {
  bgColor?: string
  textColor?: string
}

export const ProjectItemHeaderWrapper = styled.div<ProjectItemHeaderWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  height: 25px;
  color: ${({ theme, bgColor, textColor }) =>
    textColor
      ? textColor
      : bgColor
      ? readableColor(bgColor)
      : theme.colors.text};
  background: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.primary};
`

export const ProjectItemHeader = styled.span`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
`

export const ProjectItemImageWrapper = styled.div`
  height: 200px;
  width: 100%;
`

export const ProjectItemOverlayWrapper = styled(motion.div)`
  position: absolute;
  top: 25px;
  width: 100%;
  height: calc(100% - 25px);
`
export const ProjectItemOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: calc((100% - 25px) - 25px);
  background: rgba(0, 0, 0, 0.7);
`

export const ProjectItemTechPillsWrapper = styled(motion.div)`
  position: relative;
  height: calc(100% - 70px);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const ProjectItemTechPill = styled(motion.span)`
  font-size: 14px;
  padding: 3px 15px;
  background-color: #333;
  letter-spacing: 1px;
`

export const ProjectItemSeeMore = styled(motion.span)`
  cursor: pointer;
  position: absolute;
  padding: 2px 15px;
  left: calc(50% - 57.5px);
  bottom: 5px;
  transition: color 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
