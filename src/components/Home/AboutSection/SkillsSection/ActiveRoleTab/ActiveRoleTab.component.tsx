import React from "react"
import { useMotionValue } from "framer-motion"
import { debounce } from "debounce"
import { ActiveTabWrapper } from "./ActiveRoleTab.styles"

const ActiveRoleTab = ({
  refs,
  activeRoute,
  finishAnimating,
  animating,
}: any) => {
  const x = useMotionValue(0)
  const width = useMotionValue(0)

  const updateAttributes = React.useCallback(() => {
    if (refs && refs[activeRoute]) {
      x.set(refs[activeRoute].current.offsetLeft)
      width.set(refs[activeRoute].current.getBoundingClientRect().width)
    }
  }, [activeRoute, refs, x, width])

  React.useEffect(() => {
    updateAttributes()
  }, [activeRoute, refs, updateAttributes])

  React.useEffect(() => {
    const recalculateAttrs = debounce(() => {
      updateAttributes()
    }, 200)

    window.addEventListener("resize", recalculateAttrs)
    return () => {
      window.removeEventListener("resize", recalculateAttrs)
    }
  }, [updateAttributes])

  return (
    <ActiveTabWrapper
      style={{
        translateX: x,
        width: width,
      }}
      animating={animating}
      onAnimationComplete={finishAnimating}
    />
  )
}

export default ActiveRoleTab
