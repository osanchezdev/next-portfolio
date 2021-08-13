import React, { useState } from "react"
import { useDebounce } from "react-use"
import { Lottie, ReactLottieConfig } from "@alfonmga/react-lottie-light-ts"
import notFoundAnimation from "../../../animations/lottie/notfound.json"
import { NotFoundAnimationWrapper } from "./NotFoundAnimation.styles"
import { notFoundVariants } from "../NotFound.variants"

const NotFoundAnimation = () => {
  const [playingAnimation, setPlayingAnimation] = useState<boolean>(false)
  const [, cancelDebounce] = useDebounce(
    () => {
      setPlayingAnimation(true)
    },
    1500,
    []
  )
  const config: ReactLottieConfig = {
    animationData: notFoundAnimation,
    loop: true,
    autoplay: false,
  }
  return (
    <NotFoundAnimationWrapper variants={notFoundVariants}>
      <Lottie
        key="not-found"
        playingState={playingAnimation ? "playing" : "stopped"}
        speed={0.8}
        config={config}
      />
    </NotFoundAnimationWrapper>
  )
}

export default NotFoundAnimation
