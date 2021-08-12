import React from "react"
import LazyImage from "../../LazyImage/LazyImage.component"
import { SlideItemWrapper } from "./SlideItem.styles"

interface SlideItemProps {
  image: string
  index: number
}

const SlideItem = ({ image, index }: SlideItemProps) => {
  return (
    <SlideItemWrapper>
      <LazyImage
        src={require(`../../../../assets/images/projects/${image}.jpg`).default}
        alt={`${image}-${index}`}
        quality={100}
      />
    </SlideItemWrapper>
  )
}

export default SlideItem
