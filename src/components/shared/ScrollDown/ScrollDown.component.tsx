import React from "react"
import { FaChevronDown } from "react-icons/fa"
import {
  ScrollDownWrapper,
  ScrollDownThumb,
  ChevronsWrapper,
  ChevronDown,
} from "./ScrollDown.styles"
import {
  scrollDownThumbVariants,
  chevronDownVariants,
} from "./ScrollDown.variants"

const ScrollDown = () => {
  return (
    <ScrollDownWrapper>
      <ScrollDownThumb animate="animate" variants={scrollDownThumbVariants} />
      <ChevronsWrapper>
        <ChevronDown animate="animate" variants={chevronDownVariants}>
          <FaChevronDown />
        </ChevronDown>
      </ChevronsWrapper>
    </ScrollDownWrapper>
  )
}

export default ScrollDown
