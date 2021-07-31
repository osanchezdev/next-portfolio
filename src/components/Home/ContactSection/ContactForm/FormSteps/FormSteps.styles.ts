import styled from "styled-components"
import { motion } from "framer-motion"

export const CompleteStepWrapper = styled(motion.div)``

export const CompleteStepText = styled(motion.p)`
  margin: 0px;
  text-align: center;
`

export const FormStepWrapper = styled.div`
  position: absolute;
  width: 100%;
`

export const FormStep = styled(motion.form)``

export const FormStepActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
`
