import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FiMessageSquare } from "react-icons/fi"
import Input from "../../../../shared/Input/Input.component"

import {
  FormStep,
  FormStepActionsWrapper,
  FormStepWrapper,
} from "./FormSteps.styles"
import { IMessageFormValue, StepFormProps } from "../../../../../../types"
import Button from "../../../../shared/Button/Button.component"
import { formStepVariants } from "./FormSteps.variants"

const MessageForm = ({ updateForm }: StepFormProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IMessageFormValue>()

  const onSubmit: SubmitHandler<IMessageFormValue> = data => updateForm(data, 3)

  return (
    <FormStepWrapper>
      <FormStep
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        key="message-step"
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={formStepVariants}
      >
        <Input
          icon={<FiMessageSquare />}
          label="message"
          errors={errors.message}
          errorMessage={
            (errors?.message?.type ?? "") === "required"
              ? "Message is required"
              : undefined
          }
          register={register}
          required
        />
        <FormStepActionsWrapper>
          <Button
            type="button"
            variantColor="secondary"
            onClick={() => updateForm({ email: "" }, 1)}
          >
            Back
          </Button>
          <Button type="submit" disabled={errors.message ? true : false} solid>
            Submit
          </Button>
        </FormStepActionsWrapper>
      </FormStep>
    </FormStepWrapper>
  )
}

export default MessageForm
