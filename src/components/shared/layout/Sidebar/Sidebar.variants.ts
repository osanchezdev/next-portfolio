import { IVariants } from "../../../../../types";
import { getAnimationVariants } from "../../../../utils";

export const sidebarVariants: IVariants = {
  collapsed: {
    width: "0",
    transition: { when: "afterChildren" },
  },
  expanded: {
    width: "213px",
    transition: { when: "beforeChildren" },
  },
};

export const sidebarContentVariants = (): IVariants => {
  let opacity = getAnimationVariants({
    animationName: "fade",
  });
  return {
    collapsed: {
      ...opacity.initial,
    },
    expanded: {
      ...opacity.animate,
    },
  };
};

export const arrowButtonVariants = (): IVariants => {
  let horizontalFlip = getAnimationVariants({
    animationName: "horizontalFlip",
  });
  return {
    expanded: {
      ...horizontalFlip.animate,
    },
    collapsed: {
      ...horizontalFlip.initial,
    },
  };
};
