import styled from "styled-components"
import { rgba } from "polished"
import { motion } from "framer-motion"

export const InputWrapper = styled.div`
  height: 100px;
  position: relative;
`

interface IconWrapperProps {
  withError?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  font-size: 24px;
  position: absolute;
  padding: 5px;
  color: ${({ withError, theme }) =>
    withError ? "#dc3545" : rgba(theme.colors.text, 0.8)};
`
interface StyledInputProps {
  withError?: boolean
  withIcon?: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  width: calc(100% - ${({ withIcon = false }) => (withIcon ? "57px" : "27px")});
  font-size: 24px;
  padding: 6px 12px 6px
    ${({ withIcon = false }) => (withIcon ? "45px" : "15px")};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ withError, theme }) =>
    withError ? "#dc3545" : theme.colors.text};
  outline: 0;
  background: transparent;
`

export const SuggestList = styled(motion.ul)`
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${({ theme }) => theme.colors.neutral_secondary};
  position: absolute;
  right: 0;
  z-index: 1;
  font-size: 20px;
  overflow: hidden;
  border-radius: 0 0 5px 5px;
  box-shadow: 4px 6px 5px rgb(0 0 0 / 35%);
`

export const SuggestListItem = styled(motion.li)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  transition: background 300ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`
