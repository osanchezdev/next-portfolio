import { IVariants } from "../../../../../types"
import { getAnimationVariants } from "../../../../animations"

export const sidebarOverlayVariants: IVariants = {
  hide: {
    opacity: 0,
    zIndex: -1,
  },
  show: {
    opacity: 1,
    zIndex: 999,
  },
}

export const sidebarVariants: IVariants = {
  collapsed: {
    width: "0",
    transition: { when: "afterChildren" },
  },
  expanded: {
    width: "270px",
    transition: { when: "beforeChildren" },
  },
}

export const sidebarContentVariants = (): IVariants => {
  const opacity = getAnimationVariants({
    animationName: "fade",
  })
  return {
    collapsed: {
      ...opacity.initial,
    },
    expanded: {
      ...opacity.animate,
    },
  }
}

export const arrowButtonWrapperVariants: IVariants = {
  initial: {
    display: "none",
    translateX: 100,
  },
  show: {
    display: "block",
    translateX: 0,
    transition: {
      when: "afterChildren",
      delay: 4,
    },
  },
}

export const arrowButtonVariants = (): IVariants => {
  const horizontalFlip = getAnimationVariants({
    animationName: "horizontalFlip",
  })
  return {
    expanded: {
      ...horizontalFlip.animate,
    },
    collapsed: {
      ...horizontalFlip.initial,
    },
  }
}
