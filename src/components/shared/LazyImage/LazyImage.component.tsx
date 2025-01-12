'use client'
import { useState } from "react"
import Image, { StaticImageData } from "next/legacy/image"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

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
        <SkeletonTheme baseColor="#333" highlightColor="#444">
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
              fill: fit === "fill",
              height: undefined,
              width: undefined,
            }
          : {
              src,
              layout,
              height: height as number | `${number}` | undefined,
              width: width as number | `${number}` | undefined,
              style: { objectFit: fit },
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
