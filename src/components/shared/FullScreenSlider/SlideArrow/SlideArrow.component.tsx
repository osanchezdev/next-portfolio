'use client'
import { MouseEventHandler } from "react"
import Icon from "../../Icon/Icon.component"

import { SlideArrowWrapper } from "./SlideArrow.styles"

interface SlideArrowProps {
  type: "prev" | "next"
  onClick?: MouseEventHandler<HTMLDivElement>
}

const SlideArrow = ({ type, onClick }: SlideArrowProps) => {
  return (
    <SlideArrowWrapper type={type} onClick={onClick}>
      {type === "prev" ? (
        <Icon icon="BsChevronCompactLeft" />
      ) : (
        <Icon icon="BsChevronCompactRight" />
      )}
    </SlideArrowWrapper>
  )
}

export default SlideArrow
