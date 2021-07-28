import React from "react"
import _ from "lodash"
import { useMotionValue } from "framer-motion"
import { useDebounce } from "react-use"
import { ActiveTabWrapper } from "./ActiveRoleTab.styles"
import { ITabsRefs } from "../../../../../../types"

interface ActiveRoleTabProps {
  refs: ITabsRefs
  activeRoute: string | undefined
}

const ActiveRoleTab = ({ refs, activeRoute }: ActiveRoleTabProps) => {
  const x = useMotionValue(0)
  const width = useMotionValue(0)

  const [, recalculateAttrs] = useDebounce(
    () => {
      updateAttributes()
    },
    200,
    []
  )

  const updateAttributes = React.useCallback(() => {
    let activeRouteRef = activeRoute ? refs[activeRoute] : null
    if (!_.isNull(activeRouteRef)) {
      x.set(activeRouteRef.current ? activeRouteRef.current.offsetLeft : 0)
      width.set(
        activeRouteRef.current
          ? activeRouteRef.current.getBoundingClientRect().width
          : 0
      )
    }
  }, [activeRoute, refs, x, width])

  React.useEffect(() => {
    updateAttributes()
  }, [activeRoute, refs, updateAttributes])

  React.useEffect(() => {
    window.addEventListener("resize", recalculateAttrs)
    return () => {
      window.removeEventListener("resize", recalculateAttrs)
    }
  }, [recalculateAttrs, updateAttributes])

  return (
    <ActiveTabWrapper
      style={{
        translateX: x,
        width: width,
      }}
    />
  )
}

export default ActiveRoleTab
