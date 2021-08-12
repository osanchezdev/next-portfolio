import React, { MouseEventHandler } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

import { SlideArrowWrapper } from "./SlideArrow.styles"

interface SlideArrowProps {
  type: "prev" | "next"
  onClick?: MouseEventHandler<HTMLDivElement>
}

const SlideArrow = ({ type, onClick }: SlideArrowProps) => {
  return (
    <SlideArrowWrapper type={type} onClick={onClick}>
      {type === "prev" ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
    </SlideArrowWrapper>
  )
}

export default SlideArrow
