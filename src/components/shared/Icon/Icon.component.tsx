import React from "react"
import { getIcon } from "../../../utils/icons"

interface IconProps {
  icon?: string
}

const Icon = ({ icon = "RiQuestionLine" }: IconProps) => {
  return <>{React.createElement(getIcon(icon))}</>
}

export default Icon
