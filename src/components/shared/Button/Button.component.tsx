import React from "react"
import { CgSpinner } from "react-icons/cg"
import {
  ButtonWrapper,
  SButton,
  ButtonAnimatedBg,
  ButtonContentWrapper,
  ButtonLoaderWrapper,
} from "./Button.styles"
import { ButtonVariantTypes, ButtonAnimationTypes } from "../../../../types"
import {
  buttonContentVariants,
  buttonVariants,
  getButtonBgVariants,
} from "./Button.variants"

interface ButtonProps {
  children: React.ReactNode
  variantColor?: ButtonVariantTypes
  variantAnimation?: ButtonAnimationTypes
  loading?: boolean
  solid?: boolean
  disabled?: boolean
  type?: "reset" | "submit" | "button"
  onClick?: React.MouseEventHandler
}

const Button = ({
  children,
  variantColor = "primary",
  variantAnimation = "none",
  loading = false,
  solid = true,
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper>
      <SButton
        onClick={!loading ? onClick : () => {}}
        variantColor={variantColor}
        initial="initial"
        whileHover={!loading ? (!disabled ? "hover" : "shake") : ""}
        whileTap={!loading ? (!disabled ? "tapped" : "shake") : ""}
        type={type}
        solid={solid}
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
        <ButtonLoaderWrapper
          initial="hidden"
          animate={loading ? "show" : "hidden"}
          variants={buttonContentVariants}
          variantColor={variantColor}
          disabled={disabled}
        >
          <CgSpinner />
        </ButtonLoaderWrapper>
        <ButtonContentWrapper
          initial="show"
          animate={loading ? "hidden" : "show"}
          variants={buttonContentVariants}
          variantColor={variantColor}
          disabled={disabled}
        >
          {children}
        </ButtonContentWrapper>
      </SButton>
    </ButtonWrapper>
  )
}

export default Button
