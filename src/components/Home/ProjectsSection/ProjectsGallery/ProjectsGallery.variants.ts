export const projectsGalleryWrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

export const projectsGalleryItemWrapperVariants = {
  initial: {
    opacity: 0,
    translateX: 50,
  },
  animate: {
    opacity: 1,
    translateX: 0,
  },
  exit: {
    opacity: 0,
  },
}
