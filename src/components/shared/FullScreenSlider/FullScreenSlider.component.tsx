'use client'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useContext } from "react"
import Slider from "react-slick"
import SlideArrow from "./SlideArrow/SlideArrow.component"
import SlideItem from "./SlideItem/SlideItem.component"
import { FullScreenSliderContext } from "../../../context/fullScreenSliderContext"

import {
  FullScreenSliderOverlay,
  FullScreenSliderOverlayWrapper,
  FullScreenSliderWrapper,
} from "./FullScreenSlider.styles"
import {
  fullScreenSliderOverlayVariants,
  fullScreenSliderOverlayWrapperVariants,
} from "./FullScreenSlider.variants"
// TODO: Create custom slider and remove react-slick
const FullScreenSlider = () => {
  const { isVisible, sliderImages, toggleShowSlider } = useContext(
    FullScreenSliderContext
  )
  const sliderSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlideArrow type="prev" />,
    nextArrow: <SlideArrow type="next" />,
  }
  return (
    <FullScreenSliderOverlayWrapper
      initial={"initial"}
      animate={isVisible ? "show" : "hide"}
      variants={fullScreenSliderOverlayWrapperVariants}
    >
      <FullScreenSliderOverlay
        variants={fullScreenSliderOverlayVariants}
        onClick={() => toggleShowSlider()}
      >
        <FullScreenSliderWrapper onClick={e => e.stopPropagation()}>
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <SlideItem
                key={`${image}-${index}`}
                index={index}
                image={image}
              />
            ))}
          </Slider>
        </FullScreenSliderWrapper>
      </FullScreenSliderOverlay>
    </FullScreenSliderOverlayWrapper>
  )
}

export default FullScreenSlider
