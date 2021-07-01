import React from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  ScrollDownWrapper,
  ScrollDownThumb,
  ChevronsWrapper,
  ChevronDown,
} from "./ScrollDown.styles";
import {
  scrollDownThumbVarians,
  chevronDownVarians,
} from "./ScrollDown.variants";

interface Props {}

const ScrollDown = (props: Props) => {
  return (
    <ScrollDownWrapper>
      <ScrollDownThumb
        animate={["initial", "animate"]}
        variants={scrollDownThumbVarians}
      />
      <ChevronsWrapper>
        <ChevronDown animate={["animate"]} variants={chevronDownVarians}>
          <FaChevronDown />
        </ChevronDown>
      </ChevronsWrapper>
    </ScrollDownWrapper>
  );
};

export default ScrollDown;
