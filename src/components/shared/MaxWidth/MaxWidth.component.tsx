import React from "react"
import { MaxWidthWrapper } from "./MaxWidth.styles"

interface MaxWidthProps {
  children: React.ReactChild | React.ReactChild[]
}

const MaxWidth = ({ children }: MaxWidthProps) => {
  return (
    <MaxWidthWrapper>
      <>{children}</>
    </MaxWidthWrapper>
  )
}

export default MaxWidth
