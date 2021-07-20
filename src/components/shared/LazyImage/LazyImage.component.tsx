import React, { useState } from "react"
import Image from "next/image"

import { LazyImageWrapper } from "./LazyImage.styles"

interface Props {
  src: StaticImageData
  height?: number
  width?: number
}

const LazyImage = ({ src, height, width }: Props) => {
  const [imageLoading, setImageLoading] = useState(true)

  const imageLoaded = () => setImageLoading(false)

  return (
    <LazyImageWrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{
        height: { delay: 0, duration: 0.4 },
        opacity: { delay: 0.5, duration: 0.4 },
      }}
    >
      <Image src={src} alt="test-image" onLoad={imageLoaded} />
    </LazyImageWrapper>
  )
}

export default LazyImage
