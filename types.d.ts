import { Variant } from "framer-motion"
import React, { RefObject } from "react"
import { IParticlesParams } from "react-tsparticles"

export type SkillRoleTypes = "frontend" | "backend" | "mobile" | "others"

export type ButtonVariantTypes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | undefined

export type ButtonAnimationTypes =
  | "right"
  | "left"
  | "top"
  | "bottom"
  | "scale"
  | "diagonal"
  | "none"

export type AnimationTypes = "fade" | "rubberBand" | "horizontalFlip"

export interface IVariants {
  [key: string]: Variant
}

export interface IAnimations {
  [key: string]: IVariants
}

export interface IAnimationVariants {
  initialName?: string
  animateName?: string
  animationName: AnimationTypes
}
export interface ITechSkillItem {
  key: string
  text: string
  bgColor: string
  iconColor?: string
  icon?: string
}
export interface ITechSkillsByRoles {
  [key: string]: string[]
}

export interface ITabsRefs {
  [key: string]: React.RefObject<HTMLSpanElement>
}

export interface IProjectDataItem {
  id: string
  name: string
  bgColor?: string
  textColor?: string
  images: Array<string>
  tech_skills: Array<ITechSkillItem>
}

export interface INameFormValue {
  name: string
}

export interface IEmailFormValue {
  email: string
}
export interface IMessageFormValue {
  message: string
}

export interface IContactFormValues {
  [name: string]: INameFormValue
  [email: string]: IEmailFormValue
  [message: string]: IMessageFormValue
}

export interface StepFormProps {
  updateForm: Function
  loading?: boolean
}
