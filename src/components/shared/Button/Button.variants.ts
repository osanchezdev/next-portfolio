import { ButtonAnimationTypes, IAnimations, IVariants } from "../../../../types"

const buttonBgVariants: IAnimations = {
  rightOutline: {
    initial: {
      width: 0,
      height: 55,
      bottom: 0,
      left: 0,
    },
    hover: {
      width: 200,
      transition: {
        duration: 1,
      },
    },
  },
  right: {
    initial: {
      width: 200,
      height: 55,
      bottom: 0,
      right: 0,
    },
    hover: {
      width: 0,
      transition: {
        duration: 1,
      },
    },
  },
  leftOutline: {
    initial: {
      width: 0,
      height: 55,
      bottom: 0,
      right: 0,
    },
    hover: {
      width: 200,
      transition: {
        duration: 1,
      },
    },
  },
  left: {
    initial: {
      width: 0,
      height: 55,
      bottom: 0,
      right: 0,
    },
    hover: {
      width: 200,
      transition: {
        duration: 1,
      },
    },
  },
  topOutline: {
    initial: {
      width: 180,
      height: 0,
      bottom: 0,
      left: 0,
    },
    hover: {
      height: 200,
      transition: {
        duration: 1,
      },
    },
  },
  top: {
    initial: {
      width: 180,
      height: 0,
      bottom: 0,
      left: 0,
    },
    hover: {
      height: 200,
      transition: {
        duration: 1,
      },
    },
  },
  bottomOutline: {
    initial: {
      width: 180,
      height: 0,
      top: 0,
      left: 0,
    },
    hover: {
      height: 200,
      transition: {
        duration: 1,
      },
    },
  },
  bottom: {
    initial: {
      width: 180,
      height: 0,
      top: 0,
      left: 0,
    },
    hover: {
      height: 200,
      transition: {
        duration: 1,
      },
    },
  },
  scaleOutline: {
    initial: {
      borderRadius: 20,
      height: 0,
      width: 0,
    },
    hover: {
      height: 200,
      width: 200,
      transition: {
        duration: 1,
      },
    },
  },
  scale: {
    initial: {
      borderRadius: 20,
      height: 200,
      width: 200,
    },
    hover: {
      height: 0,
      width: 0,
      transition: {
        duration: 1,
      },
    },
  },
  diagonalOutline: {
    initial: {
      top: 0,
      left: -50,
      bottom: 0,
      right: 0,
      width: 300,
      skewX: 45,
      translateX: -300,
    },
    hover: {
      translateX: 25,
      transition: {
        duration: 1,
      },
    },
  },
  diagonal: {
    initial: {
      top: 0,
      left: -50,
      bottom: 0,
      right: 0,
      width: 350,
      skewX: 45,
      translateX: 5,
    },
    hover: {
      translateX: -330,
      transition: {
        duration: 1,
      },
    },
  },
}

export const buttonVariants = {
  shake: {
    translateX: [1, -1, -3, 3, 1, -1, 0],
    translateY: [1, -1, 0, 1, -1, 1, 0],
    rotateX: [0, -1, 1, 0, 1, -1, 0],
    transition: {
      duration: 0.5,
    },
  },
}

export const getButtonBgVariants = (
  animType: ButtonAnimationTypes,
  solid: boolean
): IVariants => buttonBgVariants[solid ? animType : `${animType}Outline`]
