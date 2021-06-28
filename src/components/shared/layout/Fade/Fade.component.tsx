import React from "react";
import { getAnimationVariants } from "../../../../utils";
import { FadeWrapper } from "./Fade.styles";

interface Props {
  children: React.ReactNode;
  fadeIn?: boolean;
  isAnimatedParent?: boolean;
}
const Fade = ({ children, fadeIn = true, isAnimatedParent = true }: Props) => {
  const variants = getAnimationVariants({ animationName: "fade" });
  return (
    <FadeWrapper
      {...(isAnimatedParent
        ? {
            initial: fadeIn ? "initial" : "animate",
            animate: fadeIn ? "animate" : "initial",
          }
        : {})}
      variants={variants}
    >
      {children}
    </FadeWrapper>
  );
};

export default Fade;
