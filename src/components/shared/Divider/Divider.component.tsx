import React from "react"
import { DividerWrapper, Divider as SDivider } from "./Divider.styles"

interface DividerProps {
  margin?: string
}

const Divider = ({ margin }: DividerProps) => {
  return (
    <DividerWrapper margin={margin}>
      <SDivider />
    </DividerWrapper>
  )
}

export default Divider
