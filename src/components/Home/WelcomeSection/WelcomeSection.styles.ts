import styled from "styled-components";
import { motion } from "framer-motion";

export const WelcomeSectionWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const WelcomeSectionContent = styled.div`
  position: relative;
`;

export const WelcomeTitleWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 10%;
  left: 15%;
`;

export const WelcomeTitle = styled.h1``;

export const WelcomeTitleWord = styled.div`
  display: flex;
  & > div {
    min-width: 18px;
  }
`;

export const WelcomeTitleChar = styled.span`
  cursor: default;
  font-size: 4.5rem;
  text-shadow: 4px 5px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const WelcomeHelloButton = styled.button`
  position: absolute;
  bottom: 25%;
  left: 15%;
  padding: 10px 28px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
`;
