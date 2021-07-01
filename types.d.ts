import { Variant } from "framer-motion";
import { IParticlesParams } from "react-tsparticles";

interface IVariants {
  [key: string]: Variant;
}

interface IAnimationItem {
  initial: Variant;
  animate: Variant;
}

interface IAnimationButtonItem {
  initial: Variant;
  animate?: Variant;
  hover: Variant;
}

interface IAnimations {
  [key: string]: IAnimationItem;
}

export interface IVariants {}
export interface IAnimationItem {}
export interface IAnimations {}
export interface IParticlesParams {}
