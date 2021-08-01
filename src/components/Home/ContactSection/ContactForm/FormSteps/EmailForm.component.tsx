import React, { useState, useCallback } from "react"
import _ from "lodash"
import { useForm, SubmitHandler } from "react-hook-form"
import { FiMail } from "react-icons/fi"
import Input from "../../../../shared/Input/Input.component"

import {
  FormStep,
  FormStepActionsWrapper,
  FormStepWrapper,
} from "./FormSteps.styles"
import { IEmailFormValue, StepFormProps } from "../../../../../../types"
import Button from "../../../../shared/Button/Button.component"
import { formStepVariants } from "./FormSteps.variants"

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
  } = useForm<IEmailFormValue>()

  watch(data => {
    setShowSuggest(data.email.includes("@"))
    if (!_.isNull(data.email.match(emailRegex))) {
      setShowSuggest(false)
      clearErrors("email")
    }
  })

  const autoCompleteEmail = useCallback((domain: string) => {
    setValue(
      "email",
      `${getValues("email")
        .toLowerCase()
        .slice(0, getValues("email").indexOf("@"))}${domain}`
    )
    setShowSuggest(false)
  }, [])

  const onSubmit: SubmitHandler<IEmailFormValue> = data => updateForm(data, 2)

  const getErrorMessage = useCallback((): string => {
    let errorType = errors?.email?.type ?? ""
    if (errorType === "required") return "Email is required"
    if (errorType === "pattern") return "Invalid email"
    return errorType
  }, [])

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
          icon={<FiMail />}
          label="email"
          errors={errors.email}
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
            variantColor="secondary"
            onClick={() => updateForm({ name: "" }, 0)}
          >
            Back
          </Button>
          {console.log(errors.email)}
          <Button type="submit" disabled={!_.isUndefined(errors.email)} solid>
            Next
          </Button>
        </FormStepActionsWrapper>
      </FormStep>
    </FormStepWrapper>
  )
}

export default EmailForm
