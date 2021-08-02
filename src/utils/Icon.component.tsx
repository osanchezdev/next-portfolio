import React from "react"
import { getIcon } from "./icons"

interface IconProps {
  icon: string
}

const Icon = ({ icon }: IconProps) => {
  return <>{React.createElement(getIcon(icon))}</>
}

export default Icon
