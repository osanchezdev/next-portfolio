import styled from "styled-components"

interface SlideArrowWrapperProps {
  type: "prev" | "next"
}

export const SlideArrowWrapper = styled.div<SlideArrowWrapperProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  top: 0;
  height: 100%;
  width: 35px;
  font-size: 35px;
  ${({ type }) =>
    type === "prev"
      ? {
          left: "-35px",
        }
      : {
          right: "-35px",
        }}
  transition: background 300ms ease;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`
