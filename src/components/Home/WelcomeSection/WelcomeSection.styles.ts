import styled from "styled-components";
import { motion } from "framer-motion";

export const WelcomeSectionWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const WelcomeSectionContent = styled.div`
  position: relative;
`;

export const WelcomeTitleWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 10%;
  left: 10%;
`;

export const WelcomeTitle = styled.h1``;

export const WelcomeTitleWord = styled.div`
  display: flex;
  & > div {
    min-width: 18px;
  }
`;
export const WelcomeTitleChar = styled(motion.span)`
  cursor: default;
  font-size: 4.5rem;
  font-weight: bold;
  min-width: 20px;
  text-shadow: 4px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const WelcomeHelloButton = styled.div`
  position: absolute;
  bottom: 25%;
  left: 15%;
  z-index: 0;
`;

export const WelcomeScrollDown = styled.div`
  position: absolute;
  bottom: 7%;
  left: calc(50% - 22.5px);
`;
