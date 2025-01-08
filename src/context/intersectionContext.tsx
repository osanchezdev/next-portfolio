'use client'
import { useIntersection } from "react-use"
import { createContext, ReactNode, RefObject, useEffect, useRef, useState } from "react"

export const IntersectionContext = createContext({ inView: true })

interface IntersectionProviderProps {
  children: ReactNode
  reset?: boolean
}
export const IntersectionProvider = ({
  children,
  reset = false,
}: IntersectionProviderProps) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(intersectionRef as RefObject<HTMLDivElement>, {
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
