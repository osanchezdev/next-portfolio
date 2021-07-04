import { Variant } from "framer-motion";
import { IParticlesParams } from "react-tsparticles";

type ButtonVariantTypes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | undefined;

type ButtonAnimationTypes =
  | "right"
  | "left"
  | "top"
  | "bottom"
  | "scale"
  | "diagonal";

type AnimationTypes = "fade" | "rubberBand" | "horizontalFlip";

interface IVariants {
  [key: string]: Variant;
}

interface IAnimations {
  [key: string]: IVariants;
}

export interface IVariants {}
export interface IAnimations {}
export interface IParticlesParams {}
