import React, { useState } from "react"
import { Lottie, ReactLottieConfig } from "@alfonmga/react-lottie-light-ts"
import { useDebounce } from "react-use"
import successAnimation from "../../../../../animations/lottie/success.json"
import { CompleteStepWrapper, CompleteStepText } from "./FormSteps.styles"
import { completeStepVariants } from "./FormSteps.variants"

const CompletedForm = () => {
  const [playingAnimation, setPlayingAnimation] = useState<boolean>(false)
  const [, cancelDebounce] = useDebounce(
    () => {
      setPlayingAnimation(true)
    },
    2000,
    []
  )
  const config: ReactLottieConfig = {
    animationData: successAnimation,
    loop: false,
    autoplay: false,
  }
  return (
    <CompleteStepWrapper
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={completeStepVariants}
    >
      <Lottie
        key="loading-screen"
        playingState={playingAnimation ? "playing" : "stopped"}
        speed={0.6}
        height="200px"
        width="200px"
        config={config}
        style={{ margin: "0 auto" }}
      />
      <CompleteStepText>Your message has been sent</CompleteStepText>
    </CompleteStepWrapper>
  )
}

export default CompletedForm
