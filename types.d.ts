import { Variant } from "framer-motion"

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
  $bgColor: string
  iconColor?: string
  icon?: string
}
export interface ITechSkillsByRoles {
  [key: string]: string[]
}

export interface ITabsRefs {
  [key: string]: RefObject<HTMLSpanElement>
}

export interface IProjectDataItem {
  id: string
  name: string
  $bgColor?: string
  $textColor?: string
  images: Array<string>
  tech_skills: Array<ITechSkillItem>
}

export interface IContactFormValues {
  name: string
  email: string
  message: string
}

export interface StepFormProps {
  updateForm: (data: Partial<IContactFormValues>, newStep: number) => void
  loading?: boolean
}
