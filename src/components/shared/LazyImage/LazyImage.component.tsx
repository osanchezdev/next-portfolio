import React, { useState } from "react"
import Image, { ImageLoaderProps } from "next/image"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import { BsImage } from "react-icons/bs"

import { LazyImagePlaceholder, LazyImageWrapper } from "./LazyImage.styles"

interface LazyImageProps {
  src: StaticImageData | string
  alt: string
  height?: number | string
  width?: number | string
  quality?: number
  layout?: "fill" | "responsive" | "intrinsic"
  fit?: "cover" | "contain" | "scale-down" | "fill"
}

const LazyImage = ({
  src,
  alt,
  height,
  width,
  layout = "fill",
  quality = 75,
  fit = "scale-down",
}: LazyImageProps) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true)

  const imageLoaded = () => setImageLoading(false)

  return (
    <LazyImageWrapper
      initial={"initial"}
      animate={imageLoading ? "hide" : "show"}
      transition={{
        height: { delay: 0, duration: 0.4 },
        opacity: { delay: 0.5, duration: 0.4 },
      }}
    >
      {imageLoading && (
        <SkeletonTheme color="#333" highlightColor="#444">
          <Skeleton
            wrapper={LazyImagePlaceholder}
            width="100%"
            height="100%"
            style={{ borderRadius: "0 0 5px 5px" }}
          />
        </SkeletonTheme>
      )}
      <Image
        {...(typeof src === "string"
          ? {
              src,
              layout: "fill",
            }
          : {
              src,
              objectFit: fit,
              layout,
              ...(layout === "fill" ? {} : { height, width }),
            })}
        alt={alt}
        quality={quality}
        onLoad={imageLoaded}
        unselectable={"on"}
      />
    </LazyImageWrapper>
  )
}

export default LazyImage
