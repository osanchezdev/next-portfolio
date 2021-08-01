import styled from "styled-components"
import { motion } from "framer-motion"

export const LoadingPageWrapper = styled(motion.div)`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
`

export const LoadingPageAnimation = styled(motion.div)``
