'use client'
import dynamic from 'next/dynamic';
import { useState } from "react"
import { useDebounce } from "react-use"
import successAnimation from "../../../../../animations/lottie/success.json"
import { CompleteStepWrapper, CompleteStepText } from "./FormSteps.styles"
import { completeStepVariants } from "./FormSteps.variants"

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const CompletedForm = () => {
  const [playingAnimation, setPlayingAnimation] = useState<boolean>(false)
  const [,] = useDebounce(
    () => {
      setPlayingAnimation(true)
    },
    2000,
    []
  )
  const configOptions = {
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
        isStopped={!playingAnimation}
        speed={0.6}
        height="200px"
        width="200px"
        options={configOptions}
        style={{ margin: "0 auto" }}
      />
      <CompleteStepText>Your message has been sent</CompleteStepText>
    </CompleteStepWrapper>
  )
}

export default CompletedForm
