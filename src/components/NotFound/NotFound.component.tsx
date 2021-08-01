import React, { useState, useRef } from "react"
import { useRouter } from "next/router"

import { useDebounce } from "react-use"
import { Player } from "@lottiefiles/react-lottie-player"
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
    <NotFoundPageWrapper
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={notFoundVariants}
    >
      <NotFoundTitle variants={notFoundVariants}>404 - Not Found</NotFoundTitle>
      <NotFoundAnimationWrapper variants={notFoundVariants}>
        <Player
          onEvent={event => {
            if (event === "load") setAnimationDataLoaded(true)
          }}
          autoplay={false}
          speed={0.8}
          loop={true}
          controls={false}
          src={notFoundAnimation}
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
