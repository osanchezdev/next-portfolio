import styled, { DefaultTheme } from "styled-components"
import { motion } from "framer-motion"
import { readableColor } from "polished"

const getButtonColors = (variant: string, theme: DefaultTheme) => {
  switch (variant) {
    case "disabled":
      return { color: "darkgrey" }
    case "text":
      return { color: readableColor(theme.colors.bg1) }
    case "secondary":
    case "primary":
    default:
      return { color: readableColor(theme.colors.primary) }
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
        background: "transparent",
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
  solid?: boolean
  disabled?: boolean
}

export const SButton = styled(motion.button)<SButtonVariantsProps>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  padding: 2px 20px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  background: transparent;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
`

export const ButtonAnimatedBg = styled(motion.div)<SButtonVariantsProps>`
  position: absolute;
  z-index: -1;
  ${({ theme, variantColor, disabled }) =>
    getButtonBg(disabled ? "disabled" : variantColor, theme)};
  transition: background 300ms ease;
`

export const ButtonContentWrapper = styled(motion.div)<SButtonVariantsProps>`
  letter-spacing: 1px;
  ${({ theme, variantColor, disabled }) =>
    getButtonColors(disabled ? "disabled" : variantColor, theme)};
`

export const ButtonLoaderWrapper = styled(motion.div)<SButtonVariantsProps>`
  ${({ theme, variantColor, disabled }) =>
    getButtonColors(disabled ? "disabled" : variantColor, theme)};
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 30px;
  top: calc(50% - 15px);
  & svg {
    animation: rotate-s-loader 1s linear infinite;
  }

  @keyframes rotate-s-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
