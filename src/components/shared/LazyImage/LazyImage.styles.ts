import styled from "styled-components"
import { motion } from "framer-motion"

export const LazyImageWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  overflow: hidden;
`

export const LazyImagePlaceholder = styled.div`
  position: absolute;
  top: -7px;
  left: 0;
  height: calc(100% + 2px);
  width: 100%;
`
