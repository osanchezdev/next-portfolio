'use client'
import _ from "lodash"
import { useCallback, useEffect } from "react"
import { useMotionValue } from "framer-motion"
import { ITabsRefs } from "../../../../../../types"
import { ActiveTabWrapper } from "./ActiveRoleTab.styles"

interface ActiveRoleTabProps {
  refs: ITabsRefs
  activeRoute: string | undefined
}

const ActiveRoleTab = ({ refs, activeRoute }: ActiveRoleTabProps) => {
  const x = useMotionValue(0)
  const width = useMotionValue(0)

  const updateAttributes = useCallback(() => {
    const activeRouteRef = activeRoute ? refs[activeRoute] : null
    if (!_.isNull(activeRouteRef)) {
      x.set(activeRouteRef.current ? activeRouteRef.current.offsetLeft - 5 : 0)
      width.set(
        activeRouteRef.current
          ? activeRouteRef.current.getBoundingClientRect().width + 10
          : 0
      )
    }
  }, [activeRoute, refs, x, width])

  useEffect(() => {
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
