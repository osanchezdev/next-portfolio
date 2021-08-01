import React from "react"
import { DividerWrapper, Divider as SDivider } from "./Divider.styles"

interface DividerProps {
  marginRem?: number
}

const Divider = ({ marginRem }: DividerProps) => {
  return (
    <DividerWrapper marginRem={marginRem}>
      <SDivider />
    </DividerWrapper>
  )
}

export default Divider
