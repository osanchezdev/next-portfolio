import React, { useState } from "react"
import { useRouter } from "next/router"

import { useDebounce } from "react-use"
import { Lottie, ReactLottieConfig } from "@alfonmga/react-lottie-light-ts"
import notFoundAnimation from "../../animations/lottie/notfound.json"

import {
  NotFoundPageWrapper,
  NotFoundTitle,
  NotFoundAnimationWrapper,
  NotFoundGoHomeWrapper,
  NotFoundGoHomeText,
} from "./NotFound.styles"
import { notFoundVariants } from "./NotFound.variants"
import Button from "../shared/Button/Button.component"
import Emoji from "../shared/Emoji/Emoji.component"

const NotFoundPage = () => {
  const router = useRouter()
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
  // TODO: split in chunks with dynamic import and analyze, or disable animation
  return (
    <NotFoundPageWrapper
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={notFoundVariants}
    >
      <NotFoundTitle variants={notFoundVariants}>404 - Not Found</NotFoundTitle>
      <NotFoundAnimationWrapper variants={notFoundVariants}>
        <Lottie
          key="not-found"
          playingState={playingAnimation ? "playing" : "stopped"}
          speed={0.8}
          config={config}
        />
      </NotFoundAnimationWrapper>
      <NotFoundGoHomeText variants={notFoundVariants}>
        {
          "I searched high and low but couldn't find what you 're looking for. Let's find a better place for you to go."
        }
      </NotFoundGoHomeText>
      <NotFoundGoHomeWrapper variants={notFoundVariants}>
        <Button onClick={() => router.push("/")}>
          Go home <Emoji symbol="🏡" label="home" />
        </Button>
      </NotFoundGoHomeWrapper>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
