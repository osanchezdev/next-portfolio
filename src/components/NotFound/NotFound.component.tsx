'use client'
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import Emoji from "../shared/Emoji/Emoji.component"
import Button from "../shared/Button/Button.component"
import { notFoundVariants } from "./NotFound.variants"
import {
  NotFoundPageWrapper,
  NotFoundTitle,
  NotFoundGoHomeWrapper,
  NotFoundGoHomeText,
} from "./NotFound.styles"

const DynamicNotFoundAnimation = dynamic(
  () => import("./NotFoundAnimation/NotFoundAnimation.component")
)

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <NotFoundPageWrapper
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={notFoundVariants}
    >
      <NotFoundTitle variants={notFoundVariants}>404 - Not Found</NotFoundTitle>
      <DynamicNotFoundAnimation />
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
