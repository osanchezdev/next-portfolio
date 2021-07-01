import { motion } from "framer-motion";
import { rgba } from "polished";
import styled from "styled-components";

export const ScrollDownWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 50px;
  border: calc(30px / 10) solid ${({ theme }) => rgba(theme.colors.text, 0.8)};
  border-radius: 50px;
  box-sizing: border-box;
`;

export const ScrollDownThumb = styled(motion.div)`
  background: ${({ theme }) => theme.colors.text};
  opacity: 0;
  top: 5px;
  width: 10px;
  position: absolute;
  border-radius: 5px;
  left: calc(50% - 5px);
`;

export const ChevronsWrapper = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChevronDown = styled(motion.div)`
  margin-top: -6px;
  position: relative;
  border: none;
  & svg {
    color: ${({ theme }) => theme.colors.text};
  }
`;
