import { adjustHue, complement } from "polished";
import styled, { DefaultTheme } from "styled-components";
import { motion } from "framer-motion";

const getButtonColors = (variant: string, theme: DefaultTheme) => {
  switch (variant) {
    case "text":
      return {
        border: `1px solid ${theme.colors.text}`,
        color: theme.colors.text,
      };
    case "tertiary":
      return {
        border: `1px solid ${theme.colors.tertiary}`,
        // color: theme.colors.tertiary,
        color: theme.colors.text,
      };
    case "secondary":
      return {
        border: `1px solid ${theme.colors.secondary}`,
        // color: theme.colors.secondary,
        color: theme.colors.text,
      };
    case "primary":
    default:
      return {
        border: `1px solid ${theme.colors.primary}`,
        // color: theme.colors.primary,
        color: theme.colors.text,
      };
  }
};
const getButtonBg = (variant: string, theme: DefaultTheme) => {
  switch (variant) {
    case "text":
      return {
        background: theme.colors.neutral_primary,
      };
    case "tertiary":
      return {
        background: theme.colors.tertiary,
      };
    case "secondary":
      return {
        background: theme.colors.secondary,
      };
    case "primary":
    default:
      return {
        background: theme.colors.primary,
      };
  }
};

export const ButtonWrapper = styled.div``;

interface SButtonVariantsProps {
  variantColor: string;
}

export const SButton = styled(motion.button)<SButtonVariantsProps>`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 50px;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 5px;
  background: transparent;
  ${({ theme, variantColor }) => getButtonColors(variantColor, theme)};
`;

export const ButtonAnimatedBg = styled(motion.div)<SButtonVariantsProps>`
  position: absolute;
  z-index: -1;
  ${({ theme, variantColor }) => getButtonBg(variantColor, theme)};
`;

export const ButtonContentWrapper = styled(motion.div)``;
