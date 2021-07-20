import styled from "styled-components";
import { motion } from "framer-motion";

interface ActiveTabWrapperProps {
  animating: boolean;
}

export const ActiveTabWrapper = styled(motion.div)<ActiveTabWrapperProps>`
  // opacity: ${({ animating }) => (animating ? 1 : 0)};
  opacity: 1;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  // background-color: #faf;
  border-radius: 30px;
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;
