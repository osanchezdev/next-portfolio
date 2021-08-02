import { IconType } from "react-icons/lib"
import { AiOutlineAntDesign } from "react-icons/ai"
import { GrGolang } from "react-icons/gr"
import {
  SiAngular,
  SiCss3,
  SiBabel,
  SiBootstrap,
  SiDart,
  SiDocker,
  SiElectron,
  SiFlutter,
  SiGatsby,
  SiGraphql,
} from "react-icons/si"

const ICONS: {
  [key: string]: IconType
} = {
  SiAngular,
  SiCss3,
  SiBabel,
  SiBootstrap,
  SiDart,
  SiDocker,
  SiElectron,
  SiFlutter,
  SiGatsby,
  GrGolang,
  SiGraphql,
  AiOutlineAntDesign,
}

export const getIcon = (iconString: string): IconType => ICONS[`${iconString}`]
