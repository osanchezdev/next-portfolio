import animations, { AnimationTypes } from "../animations";

interface AnimationVariantsI {
  initialName?: string;
  animateName?: string;
  animationName: AnimationTypes;
}
export const getAnimationVariants = ({
  initialName = "initial",
  animateName = "animate",
  animationName,
}: AnimationVariantsI): any => {
  return {
    [initialName]: {
      ...animations[animationName].initial,
    },
    [animateName]: {
      ...animations[animationName].animate,
    },
  };
};
