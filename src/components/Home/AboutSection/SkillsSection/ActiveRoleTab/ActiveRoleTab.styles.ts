import styled from "styled-components"
import { motion } from "framer-motion"

export const ActiveTabWrapper = styled(motion.div)`
  opacity: 1;
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
`
