import React from "react";

import { motion } from "framer-motion";
import {
  ButtonWrapper,
  SButton,
  ButtonAnimatedBg,
  ButtonContentWrapper,
} from "./Button.styles";

interface Props {
  children: React.ReactNode;
  variantColor?: "primary" | "secondary" | "tertiary" | "text" | undefined;
}

const animatedBgVariants = {
  initial: {
    width: 180,
    height: 0,
    bottom: 0,
    left: 0,
  },
  hover: {
    height: 200,
    // width: 200,
    transition: {
      duration: 1,
    },
  },
};

const Button = ({ children, variantColor = "primary" }: Props) => {
  return (
    <ButtonWrapper>
      <SButton variantColor={variantColor} initial="initial" whileHover="hover">
        <ButtonAnimatedBg
          variantColor={variantColor}
          variants={animatedBgVariants}
        />
        <ButtonContentWrapper>{children}</ButtonContentWrapper>
      </SButton>
    </ButtonWrapper>
  );
};

export default Button;
