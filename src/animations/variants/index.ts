import _merge from "lodash.merge";
import { getAnimationVariants } from "../../utils";
import { Variant } from "framer-motion";

interface VariantsI {
  [key: string]: Variant;
}

export const SidebarVariants: VariantsI = {
  collapsed: {
    width: "0",
    transition: { when: "afterChildren" },
  },
  expanded: {
    width: "213px",
    transition: { when: "beforeChildren" },
  },
};
export const SidebarContentVariants = (): VariantsI => {
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
export const ArrowButtonVariants = (): VariantsI => {
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

export const WelcomeTitleVariants = (): VariantsI => {
  return {
    initial: {},
    animate: {
      transition: {
        duration: 2,
        staggerChildren: 0.1,
        type: "tween",
        ease: "easeIn",
        when: "beforeChildren",
      },
    },
  };
};

export const RubberVariants = (): VariantsI => {
  let rubberBand = _merge(
    getAnimationVariants({
      animationName: "rubberBand",
    }),
    {
      initial: {
        transition: { duration: 2, type: "tween", ease: "easeOut" },
      },
    }
  );
  return {
    initial: {
      ...rubberBand.initial,
    },
    animate: {
      ...rubberBand.animate,
    },
  };
};
