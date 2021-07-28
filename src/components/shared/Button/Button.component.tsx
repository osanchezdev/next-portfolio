import React from "react"
import {
  ButtonWrapper,
  SButton,
  ButtonAnimatedBg,
  ButtonContentWrapper,
} from "./Button.styles"
import { ButtonVariantTypes, ButtonAnimationTypes } from "../../../../types"
import { getButtonBgVariants } from "./Button.variants"
import { transitions } from "polished"

interface ButtonProps {
  children: React.ReactNode
  variantColor?: ButtonVariantTypes
  variantAnimation?: ButtonAnimationTypes
  solid?: boolean
  onClick?: React.MouseEventHandler
}

const Button = ({
  children,
  variantColor = "primary",
  variantAnimation = "diagonal",
  solid = false,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper>
      <SButton
        onClick={onClick}
        variantColor={variantColor}
        initial="initial"
        whileHover="hover"
      >
        <ButtonAnimatedBg
          variantColor={variantColor}
          variants={{ ...getButtonBgVariants(variantAnimation, solid) }}
        />
        <ButtonContentWrapper>{children}</ButtonContentWrapper>
      </SButton>
    </ButtonWrapper>
  )
}

export default Button
