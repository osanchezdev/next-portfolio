'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import Input from "../../../../shared/Input/Input.component"

import {
  FormStep,
  FormStepActionsWrapper,
  FormStepWrapper,
} from "./FormSteps.styles"
import { IContactFormValues, StepFormProps } from "../../../../../../types"
import Button from "../../../../shared/Button/Button.component"
import Icon from "../../../../shared/Icon/Icon.component"
import { formStepVariants } from "./FormSteps.variants"

const MessageForm = ({ updateForm, loading }: StepFormProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Partial<IContactFormValues>>()

  const onSubmit: SubmitHandler<Partial<IContactFormValues>> = data => updateForm({
    message: data.message,
  }, 3)

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
          icon={<Icon icon="FiMessageSquare" />}
          label="message"
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
            $variantColor="text"
            onClick={() => updateForm({ email: "" }, 1)}
          >
            Back
          </Button>
          <Button
            type="submit"
            $disabled={errors.message ? true : false}
            $loading={loading}
            $solid
          >
            Submit
          </Button>
        </FormStepActionsWrapper>
      </FormStep>
    </FormStepWrapper>
  )
}

export default MessageForm
