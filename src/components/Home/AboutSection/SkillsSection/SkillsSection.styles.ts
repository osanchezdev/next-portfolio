import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../../styles/mediaQueries"
import { darken, linearGradient } from "polished"

export const SkillsSectionWrapper = styled.div`
  position: relative;
`

export const TechSkillsHeaderWrapper = styled.div`
  position: relative;
`

export const TechSkillsRolesWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`

interface TechSkillRoleItemProps {
  isActive: boolean
}

export const TechSkillRoleItem = styled.span<TechSkillRoleItemProps>`
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;
  border-radius: 25px;
  min-width: 75px;
  padding: 0 5px;
  color: ${({ theme, isActive }) => (isActive ? "#ffffff" : theme.colors.text)};
  border: 2px solid transparent;

  transition: color
    ${({ isActive }) =>
      isActive ? "500ms cubic-bezier(1, -0.22, 0.83, 0.67)" : "300ms ease"};
`

interface TechSkillsWrapperProps {
  animatingTab: boolean
}

export const TechSkillsWrapper = styled.div<TechSkillsWrapperProps>`
  display: grid;
  position: relative;
  width: 100%;
  min-height: 0;
  min-width: 0;
  overflow: ${({ animatingTab }) => (animatingTab ? "hidden" : "inherit")};

  @media ${device.mobileS} {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    height: 665px;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 24px;
    padding: 1.5rem 0;
    height: 540px;
  }
`

export const TechSkillItemWrapper = styled.div`
  position: relative;
  height: 70px;
`

interface TechSkillItemProps {
  bgColor: string
}

export const TechSkillItem = styled(motion.div)<TechSkillItemProps>`
  opacity: 0;
  scale: 0;
  box-sizing: border-box;
  position: absolute;
  border-radius: 50%;
  box-shadow: 4px 6px 5px rgb(0 0 0 / 35%);
  ${({ theme, bgColor }) =>
    linearGradient({
      colorStops: [`${bgColor} 45%`, `${darken(0.2, bgColor)} 100%`],
      toDirection: "to bottom left",
      fallback: theme.colors.neutral_primary,
    })}

  @media ${device.mobileS} {
    flex: 0 0 100%;
  }
  @media ${device.laptop} {
    flex: 0 0 60%;
  }
`

export const TechSkillsEmptyWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 540px;
  padding: 1.5rem 0;
`

export const TechSkillsEmptyText = styled.p`
  font-size: 32px;
`

export const TechSkillsEmptyIcon = styled(motion.span)`
  font-size: 42px;
  position: absolute;
  top: 10%;
  left: 5%;
`
