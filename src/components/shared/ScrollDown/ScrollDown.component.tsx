import React from "react"
import Icon from "../Icon/Icon.component"
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
          <Icon icon="FaChevronDown" />
        </ChevronDown>
      </ChevronsWrapper>
    </ScrollDownWrapper>
  )
}

export default ScrollDown
