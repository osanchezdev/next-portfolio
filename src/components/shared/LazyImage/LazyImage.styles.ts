import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../styles/mediaQueries"

export const LazyImageWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  border: 0;
`

export const LazyImagePlaceholder = styled.div`
  position: absolute;
  left: calc(50% - 2.5vw);
  top: calc(50% - 2.5vw);
  font-size: 5vw;
`
