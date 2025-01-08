'use client'
import styled from "styled-components"
import { readableColor, rgba } from "polished"
import { motion } from "framer-motion"

export const InputWrapper = styled.div`
  min-height: 150px;
  position: relative;
`

interface IconWrapperProps {
  $withError?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  font-size: 32px;
  position: absolute;
  padding: 7px 3px;
  color: ${({ $withError, theme }) =>
    $withError ? theme.colors.error : rgba(theme.colors.text, 0.8)};
`
interface StyledInputProps extends IconWrapperProps {
  $withIcon?: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  width: calc(100% - ${({ $withIcon = false }) => ($withIcon ? "57px" : "27px")});
  font-size: 24px;
  padding: 6px 12px 6px
    ${({ $withIcon = false }) => ($withIcon ? "50px" : "15px")};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${({ $withError, theme }) =>
    $withError ? theme.colors.error : theme.colors.text};
  outline: 0;
  background: transparent;
  height: 40px;
`

export const SuggestList = styled(motion.ul)`
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${({ theme }) => theme.colors.bg1};
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
    color: ${({ theme }) => readableColor(theme.colors.primary)};
    background: ${({ theme }) => theme.colors.primary};
  }
`

export const InputLabelWrapper = styled.div``

export const InputLabel = styled.label`
  margin: 0;
  text-transform: capitalize;
  font-weight: bold;
`
