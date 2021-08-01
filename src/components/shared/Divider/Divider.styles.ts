import styled from "styled-components"

interface DividerWrapperprops {
  marginRem?: number
}

export const DividerWrapper = styled.div<DividerWrapperprops>`
  max-width: ${({ theme }) => theme.maxWidth}px;
  margin: ${({ marginRem }) => (marginRem ? `${marginRem}rem` : "1.3rem")} auto;
`

export const Divider = styled.hr`
  position: relative;
  height: 1px;
  width: 90%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.text};

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.text};
    display: inline-block;
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    position: absolute;
    top: -4px;
    left: calc(50% - 1px);
    margin: 0 0 0 -3px;
  }
`
