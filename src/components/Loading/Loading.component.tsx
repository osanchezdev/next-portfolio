'use client'
import { useState } from "react"
import dynamic from "next/dynamic"
import { useDebounce } from "react-use"
import loadingAnimation from "../../animations/lottie/loading.json"
import { LoadingPageAnimation, LoadingPageWrapper } from "./Loading.styles"
import {
  loadingPageAnimationVariants,
  loadingPageWrapperVariants,
} from "./Loading.variants"

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const LoadingPage = () => {
  const [playingAnimation, setPlayingAnimation] = useState<boolean>(false)
  useDebounce(
    () => {
      setPlayingAnimation(true)
    },
    1500,
    []
  )
  const configOptions = {
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
          isStopped={!playingAnimation}
          speed={0.8}
          options={configOptions}
        />
      </LoadingPageAnimation>
    </LoadingPageWrapper>
  )
}

export default LoadingPage
