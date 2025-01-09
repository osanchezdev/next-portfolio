'use client'
import { useState } from "react"
import dynamic from "next/dynamic"
import { useDebounce } from "react-use"

import notFoundAnimation from "../../../animations/lottie/notfound.json"
import { NotFoundAnimationWrapper } from "./NotFoundAnimation.styles"
import { notFoundVariants } from "../NotFound.variants"

const Lottie = dynamic(() => import("react-lottie"), { ssr: false })

const NotFoundAnimation = () => {
  const [playingAnimation, setPlayingAnimation] = useState<boolean>(false)
  useDebounce(
    () => {
      setPlayingAnimation(true)
    },
    1500,
    []
  )
  const configOptions = {
    animationData: notFoundAnimation,
    loop: true,
    autoplay: false,
  }
  return (
    <NotFoundAnimationWrapper variants={notFoundVariants}>
      <Lottie
        key="not-found"
        isStopped={!playingAnimation}
        speed={0.8}
        options={configOptions}
      />
    </NotFoundAnimationWrapper>
  )
}

export default NotFoundAnimation
