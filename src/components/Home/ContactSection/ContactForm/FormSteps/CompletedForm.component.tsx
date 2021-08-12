import React, { useRef, useState } from "react"
import { useDebounce } from "react-use"
import { Player } from "@lottiefiles/react-lottie-player"
import successAnimation from "../../../../../animations/lottie/success.json"
import { CompleteStepWrapper, CompleteStepText } from "./FormSteps.styles"
import { completeStepVariants } from "./FormSteps.variants"

interface Props {}

const CompletedForm = (props: Props) => {
  const [animationDataLoaded, setAnimationDataLoaded] = useState<boolean>(false)
  const ref = useRef<any>(null)
  const [, cancelDebounce] = useDebounce(
    () => {
      ref.current && ref.current.play()
    },
    1500,
    [animationDataLoaded]
  )
  return (
    <CompleteStepWrapper
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={completeStepVariants}
    >
      <Player
        onEvent={event => {
          if (event === "load") setAnimationDataLoaded(true)
        }}
        keepLastFrame
        autoplay={false}
        ref={ref}
        speed={0.6}
        loop={false}
        controls={false}
        src={successAnimation}
        style={{ height: "200px", width: "200px" }}
      />
      <CompleteStepText>Your message has been sent</CompleteStepText>
    </CompleteStepWrapper>
  )
}

export default CompletedForm
