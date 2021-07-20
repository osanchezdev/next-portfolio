import { Variant } from "framer-motion";
import React, { RefObject } from "react";
import { IParticlesParams } from "react-tsparticles";

type SkillRoleTypes = "frontend" | "backend" | "mobile" | "desktop";

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

interface IEmptyProps {}

interface IVariants {
  [key: string]: Variant;
}

interface IAnimations {
  [key: string]: IVariants;
}
interface ITechSkillItem {
  key: string;
  text: string;
  bgColor: string;
}
interface ITechSkillsByRoles {
  [key: string]: number[];
}

interface ITabsRefs {
  [key: string]: React.RefObject<HTMLSpanElement>;
}

export interface IVariants {}
export interface IAnimations {}
export interface IParticlesParams {}
export interface ITechSkillItem {}
export interface IEmptyProps {}
export interface ITechSkillsByRoles {}
export interface ITabsRefs {}
