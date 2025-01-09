'use client'
import { createContext, ReactElement, ReactNode, useState } from "react"

type FullScreenSliderState = {
  isVisible: boolean
  sliderImages: Array<string>
  toggleShowSlider: () => void
  setSliderImages: (images: Array<string>) => void
}

const initialState: FullScreenSliderState = {
  isVisible: false,
  sliderImages: [],
  toggleShowSlider: () => {},
  setSliderImages: () => {},
}

export const FullScreenSliderContext =
  createContext<FullScreenSliderState>(initialState)

interface FullScreenSliderProviderProps {
  children: ReactNode
}

const FullScreenSliderProvider = ({
  children,
}: FullScreenSliderProviderProps): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [sliderImages, setSliderImages] = useState<Array<string>>([])

  const toggleShowSlider = (): void => {
    setIsVisible(!isVisible)
  }

  return (
    <FullScreenSliderContext.Provider
      value={{
        isVisible,
        sliderImages,
        toggleShowSlider,
        setSliderImages,
      }}
    >
      {children}
    </FullScreenSliderContext.Provider>
  )
}

export default FullScreenSliderProvider
