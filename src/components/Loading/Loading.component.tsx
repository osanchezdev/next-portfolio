import React, { useState, useRef } from "react"
import { useDebounce } from "react-use"
import { Lottie } from "@alfonmga/react-lottie-light-ts"
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
  // TODO: https://github.com/alfonmga/react-lottie-light-ts/blob/master/example/src/LottieRemote.tsx
  return (
    <LoadingPageWrapper
      initial={"initial"}
      animate={"show"}
      exit={"exit"}
      variants={loadingPageWrapperVariants}
    >
      <LoadingPageAnimation variants={loadingPageAnimationVariants}>
        <Lottie
          lottieEventListeners
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
      </LoadingPageAnimation>
    </LoadingPageWrapper>
  )
}

export default LoadingPage
