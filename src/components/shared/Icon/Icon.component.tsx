'use client'
import { createElement } from "react"
import { getIcon } from "../../../utils/icons"

interface IconProps {
  icon?: string
}

const Icon = ({ icon = "RiQuestionLine" }: IconProps) => {
  return <>{createElement(getIcon(icon))}</>
}

export default Icon
