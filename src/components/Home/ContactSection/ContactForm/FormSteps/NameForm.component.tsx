import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Input from "../../../../shared/Input/Input.component"

import {
  FormStep,
  FormStepActionsWrapper,
  FormStepWrapper,
} from "./FormSteps.styles"
import { INameFormValue, StepFormProps } from "../../../../../../types"
import Button from "../../../../shared/Button/Button.component"
import { formStepVariants } from "./FormSteps.variants"
import Icon from "../../../../shared/Icon/Icon.component"

const NameForm = ({ updateForm }: StepFormProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<INameFormValue>()

  const onSubmit: SubmitHandler<INameFormValue> = data => updateForm(data, 1)

  return (
    <FormStepWrapper>
      <FormStep
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        key="name-step"
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={formStepVariants}
      >
        <Input
          icon={<Icon icon="FiUser" />}
          label="name"
          errors={errors.name}
          errorMessage={
            (errors?.name?.type ?? "") === "required"
              ? "Name is required"
              : undefined
          }
          register={register}
          required
        />
        <FormStepActionsWrapper>
          <Button type="submit" disabled={errors.name ? true : false} solid>
            Next
          </Button>
        </FormStepActionsWrapper>
      </FormStep>
    </FormStepWrapper>
  )
}

export default NameForm
