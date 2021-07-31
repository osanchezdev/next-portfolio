import React from "react"
import {
  ButtonWrapper,
  SButton,
  ButtonAnimatedBg,
  ButtonContentWrapper,
} from "./Button.styles"
import { ButtonVariantTypes, ButtonAnimationTypes } from "../../../../types"
import { buttonVariants, getButtonBgVariants } from "./Button.variants"

interface ButtonProps {
  children: React.ReactNode
  variantColor?: ButtonVariantTypes
  variantAnimation?: ButtonAnimationTypes
  solid?: boolean
  disabled?: boolean
  type?: "reset" | "submit" | "button"
  onClick?: React.MouseEventHandler
}

const Button = ({
  children,
  variantColor = "primary",
  variantAnimation = "diagonal",
  solid = false,
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) => {
  // TODO: Implement loading prop and loading animation
  return (
    <ButtonWrapper>
      <SButton
        onClick={onClick}
        variantColor={variantColor}
        initial="initial"
        whileHover={!disabled ? "hover" : "shake"}
        whileTap={!disabled ? "hover" : "shake"}
        type={type}
        disabled={disabled}
        variants={buttonVariants}
      >
        <ButtonAnimatedBg
          disabled={disabled}
          variantColor={variantColor}
          variants={{
            ...getButtonBgVariants(variantAnimation, solid),
          }}
        />
        <ButtonContentWrapper>{children}</ButtonContentWrapper>
      </SButton>
    </ButtonWrapper>
  )
}

export default Button
