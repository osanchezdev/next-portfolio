import React from "react";
import { useAnimation } from "framer-motion";
import { RubberWrapper } from "./Rubber.styles";
import { RubberVariants } from "../../../animations/variants";

interface Props {
  children: React.ReactNode;
  playOnHover?: boolean;
  isAnimatedParent?: boolean;
}

const Rubber = ({
  children,
  playOnHover = false,
  isAnimatedParent = true,
}: Props) => {
  const controls = useAnimation();
  const variants = RubberVariants();

  return (
    <RubberWrapper
      {...(isAnimatedParent
        ? {
            initial: "initial",
            animate: controls,
          }
        : {})}
      // TODO: Check why hover damage initial?
      // whileHover={undefined}
      {...(playOnHover ? { whileHover: "animate" } : {})}
      variants={variants}
    >
      {children}
    </RubberWrapper>
  );
};

export default Rubber;
