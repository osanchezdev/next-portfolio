import styled, { DefaultTheme } from "styled-components"
import { motion } from "framer-motion"

const getButtonColors = (variant: string, theme: DefaultTheme) => {
  switch (variant) {
    case "disabled":
      return {
        color: "lightgray",
      }
    case "text":
      return {
        color: theme.colors.text,
      }
    case "tertiary":
      return {
        color: theme.colors.text,
      }
    case "secondary":
      return {
        color: theme.colors.text,
      }
    case "primary":
    default:
      return {
        color: theme.colors.text,
      }
  }
}
const getButtonBg = (variant: string, theme: DefaultTheme) => {
  switch (variant) {
    case "disabled":
      return {
        background: "gray",
      }
    case "text":
      return {
        background: theme.colors.neutral_primary,
      }
    case "tertiary":
      return {
        background: theme.colors.tertiary,
      }
    case "secondary":
      return {
        background: theme.colors.secondary,
      }
    case "primary":
    default:
      return {
        background: theme.colors.primary,
      }
  }
}

export const ButtonWrapper = styled.div``

interface SButtonVariantsProps {
  variantColor: string
  disabled?: boolean
}

export const SButton = styled(motion.button)<SButtonVariantsProps>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 50px;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 5px;
  background: transparent;
  ${({ theme, variantColor, disabled }) =>
    getButtonColors(disabled ? "disabled" : variantColor, theme)};
`

export const ButtonAnimatedBg = styled(motion.div)<SButtonVariantsProps>`
  position: absolute;
  z-index: -1;
  ${({ theme, variantColor, disabled }) =>
    getButtonBg(disabled ? "disabled" : variantColor, theme)};
  transition: background 300ms ease;
`

export const ButtonContentWrapper = styled(motion.div)`
  font-weight: 400;
`
