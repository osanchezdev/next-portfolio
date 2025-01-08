'use client'
import _ from "lodash"
import { useState, useCallback } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Input from "../../../../shared/Input/Input.component"

import {
  FormStep,
  FormStepActionsWrapper,
  FormStepWrapper,
} from "./FormSteps.styles"
import { IContactFormValues, StepFormProps } from "../../../../../../types"
import Button from "../../../../shared/Button/Button.component"
import { formStepVariants } from "./FormSteps.variants"
import Icon from "../../../../shared/Icon/Icon.component"

const emailRegex = /\S+@\S+\.\S+/

const EmailForm = ({ updateForm }: StepFormProps) => {
  const [showSuggest, setShowSuggest] = useState<boolean>(false)
  const {
    formState: { errors },
    watch,
    getValues,
    setValue,
    clearErrors,
    register,
    handleSubmit,
  } = useForm<Partial<IContactFormValues>>()

  watch(data => {
    setShowSuggest(data?.email?.includes("@") ?? false)
    if (!_.isNull(data?.email?.match(emailRegex))) {
      setShowSuggest(false)
      clearErrors("email")
    }
  })

  const autoCompleteEmail = useCallback((domain: string) => {
    setValue(
      "email",
      `${getValues("email")
        ?.toLowerCase()
        ?.slice(0, getValues("email")?.indexOf("@"))}${domain}`
    )
    setShowSuggest(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit: SubmitHandler<Partial<IContactFormValues>> = (data) => updateForm({
    email: data.email,
  }, 2)

  const getErrorMessage = useCallback((): string => {
    const errorType = errors?.email?.type ?? ""
    if (errorType === "required") return "Email is required"
    if (errorType === "pattern") return "Invalid email"
    return errorType
  }, [errors?.email?.type])

  return (
    <FormStepWrapper>
      <FormStep
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        key="email-step"
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={formStepVariants}
      >
        <Input
          icon={<Icon icon="FiMail" />}
          label="email"
          errorMessage={getErrorMessage()}
          pattern={emailRegex}
          register={register}
          showSuggestList={showSuggest}
          suggestList={["@gmail.com", "@outlook.com", "@hotmail.com"]}
          suggestCallback={autoCompleteEmail}
          required
        />
        <FormStepActionsWrapper>
          <Button
            type="button"
            variantColor="text"
            onClick={() => updateForm({ name: "" }, 0)}
          >
            Back
          </Button>
          <Button type="submit" disabled={!_.isUndefined(errors.email)} solid>
            Next
          </Button>
        </FormStepActionsWrapper>
      </FormStep>
    </FormStepWrapper>
  )
}

export default EmailForm
