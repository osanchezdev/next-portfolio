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

  const updateAttributes = React.useCallback(() => {
    let activeRouteRef = activeRoute ? refs[activeRoute] : null
    if (!_.isNull(activeRouteRef)) {
      x.set(activeRouteRef.current ? activeRouteRef.current.offsetLeft - 5 : 0)
      width.set(
        activeRouteRef.current
          ? activeRouteRef.current.getBoundingClientRect().width + 10
          : 0
      )
    }
  }, [activeRoute, refs, x, width])

  React.useEffect(() => {
    updateAttributes()
    window.addEventListener("resize", updateAttributes)
    return () => {
      window.removeEventListener("resize", updateAttributes)
    }
  }, [activeRoute, refs, updateAttributes])

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
