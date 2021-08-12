import React, { useState } from "react"
import { useDebounce } from "react-use"
import { Lottie, ReactLottieConfig } from "@alfonmga/react-lottie-light-ts"
import loadingAnimation from "../../animations/lottie/loading.json"
import { LoadingPageAnimation, LoadingPageWrapper } from "./Loading.styles"
import {
  loadingPageAnimationVariants,
  loadingPageWrapperVariants,
} from "./Loading.variants"

const LoadingPage = () => {
  const [playingAnimation, setPlayingAnimation] = useState<boolean>(false)
  const [, cancelDebounce] = useDebounce(
    () => {
      setPlayingAnimation(true)
    },
    1500,
    []
  )
  const config: ReactLottieConfig = {
    animationData: loadingAnimation,
    loop: true,
    autoplay: false,
  }
  return (
    <LoadingPageWrapper
      initial={"initial"}
      animate={"show"}
      exit={"exit"}
      variants={loadingPageWrapperVariants}
    >
      <LoadingPageAnimation variants={loadingPageAnimationVariants}>
        <Lottie
          key="loading-screen"
          playingState={playingAnimation ? "playing" : "stopped"}
          speed={0.8}
          config={config}
        />
      </LoadingPageAnimation>
    </LoadingPageWrapper>
  )
}

export default LoadingPage
