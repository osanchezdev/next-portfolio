import React, { useEffect, useState } from "react"
import { useIntersection } from "react-use"

export const IntersectionContext = React.createContext({ inView: true })

interface IntersectionProviderProps {
  children: React.ReactNode
  reset?: boolean
}
export const IntersectionProvider = ({
  children,
  reset = false,
}: IntersectionProviderProps) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  })

  useEffect(() => {
    const inViewNow = intersection && 0 < intersection.intersectionRatio
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  )
}
