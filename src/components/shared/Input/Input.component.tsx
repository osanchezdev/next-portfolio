import React from "react"
import { Path, UseFormRegister } from "react-hook-form"
import { IContactFormValues } from "../../../../types"
import {
  IconWrapper,
  InputLabel,
  InputLabelWrapper,
  InputWrapper,
  StyledInput as SInput,
  SuggestList,
  SuggestListItem,
} from "./Input.styles"
import { suggestListItemVariants, suggestListVariants } from "./Input.variants"

interface InputProps {
  icon?: React.ReactElement
  label: Path<IContactFormValues>
  register: UseFormRegister<any>
  errors?: Object
  errorMessage?: string
  required?: boolean
  pattern?: RegExp
  showSuggestList?: boolean
  suggestCallback?: Function
  suggestList?: string[]
}

const Input = ({
  icon,
  label,
  errors,
  register,
  required = false,
  pattern,
  showSuggestList = false,
  suggestCallback,
  suggestList = [],
}: InputProps) => {
  return (
    <InputWrapper>
      <InputLabelWrapper>
        {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      </InputLabelWrapper>
      {icon && <IconWrapper withError={!!errors}>{icon}</IconWrapper>}
      <SInput
        id={label}
        withError={!!errors}
        withIcon={!!icon}
        {...register(label, {
          required,
          pattern,
        })}
      />
      <SuggestList
        initial={"initial"}
        animate={showSuggestList ? "show" : "hide"}
        variants={suggestListVariants}
      >
        {suggestList.map(item => (
          <SuggestListItem
            key={item}
            onClick={e =>
              suggestCallback && suggestCallback(e.currentTarget.innerText)
            }
            variants={suggestListItemVariants}
          >
            {item}
          </SuggestListItem>
        ))}
      </SuggestList>
    </InputWrapper>
  )
}

export default Input
