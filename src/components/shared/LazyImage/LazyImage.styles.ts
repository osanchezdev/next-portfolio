import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../styles/mediaQueries";

export const LazyImageWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
