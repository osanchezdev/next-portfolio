'use client'
import { ReactNode } from "react"
import { MaxWidthWrapper } from "./MaxWidth.styles"

interface MaxWidthProps {
  children: ReactNode | ReactNode[]
}

const MaxWidth = ({ children }: MaxWidthProps) => {
  return (
    <MaxWidthWrapper>
      <>{children}</>
    </MaxWidthWrapper>
  )
}

export default MaxWidth
