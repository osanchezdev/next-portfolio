import React, { useState, useRef } from "react"
import { useDebounce } from "react-use"
import { Player } from "@lottiefiles/react-lottie-player"
import loadingAnimation from "../../animations/lottie/loading.json"
import { LoadingPageAnimation, LoadingPageWrapper } from "./Loading.styles"
import {
  loadingPageAnimationVariants,
  loadingPageWrapperVariants,
} from "./Loading.variants"

const LoadingPage = () => {
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
    <LoadingPageWrapper
      initial={"initial"}
      animate={"show"}
      exit={"exit"}
      variants={loadingPageWrapperVariants}
    >
      <LoadingPageAnimation variants={loadingPageAnimationVariants}>
        <Player
          onEvent={event => {
            if (event === "load") setAnimationDataLoaded(true)
          }}
          ref={ref}
          autoplay={false}
          speed={0.8}
          loop={true}
          controls={false}
          src={loadingAnimation}
        />
        {/* <h1>Loading...</h1> */}
      </LoadingPageAnimation>
    </LoadingPageWrapper>
  )
}

export default LoadingPage
