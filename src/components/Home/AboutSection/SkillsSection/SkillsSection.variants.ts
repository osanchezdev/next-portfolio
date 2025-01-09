import _ from "lodash"
import { IVariants } from "../../../../../types"

const getRandomPosition = () => {
  return {
    left: `${_.random(5, 40, true)}%`,
    top: `${_.random(5, 95, true)}%`,
  }
}

const getRandomSize = () => {
  const randomSize = _.random(30, 50, true)
  return {
    height: randomSize,
    width: randomSize,
  }
}

export const getSkillItemVariants = (): IVariants => {
  const randomSizeProps = getRandomSize()
  const randomPositionProps = getRandomPosition()
  return {
    initial: {
      opacity: 0,
      ...randomSizeProps,
      ...randomPositionProps,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: _.random(1.2, 4, true),
      },
    },
    whileHoverOrTapScale: {
      scale: 2,
      transition: {
        delay: 0.1,
      },
    },
    onExit: {
      opacity: 0,
      scale: 0,
      transitionDelay: "0",
      transitionDuration: "500ms",
    },
  }
}

export const skillEmptyWrapperVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 5,
    },
  },
}

export const skillEmptyPointUpVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 15,
    },
  },
  pointUp: {
    translateY: [-20, 20, -20],
    transition: {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
    },
  },
}
