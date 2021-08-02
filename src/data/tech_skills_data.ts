import _ from "lodash"
import React from "react"
import { SiAngular } from "react-icons/si"
import { ITechSkillItem, ITechSkillsByRoles, SkillRoleTypes } from "../../types"

interface CompleteGridColumnsProps {
  techSkills: Array<string>
}

const MAX_TECH_ITEMS = 40

const completeGridColumns = ({
  techSkills,
}: CompleteGridColumnsProps): string[] =>
  _.shuffle([
    ...techSkills,
    ...new Array(MAX_TECH_ITEMS - techSkills.length).fill(null),
  ])

export const TECH_ROLES: SkillRoleTypes[] = [
  "frontend",
  "backend",
  "mobile",
  "desktop",
]

// ? Should change logo images for icons
export const TECH_SKILLS_DATA: {
  [key: string]: ITechSkillItem
} = {
  angular: {
    key: "angular",
    text: "Angular",
    bgColor: "#ff002e",
    icon: "SiAngular",
  },
  css3: { key: "css3", text: "CSS3", bgColor: "#379AD6", icon: "SiCss3" },
  antd: {
    key: "antd",
    text: "Ant Design",
    bgColor: "#FF5E63",
    icon: "AiOutlineAntDesign",
  },
  babel: { key: "babel", text: "Babel", bgColor: "#FFDD21", icon: "SiBabel" },
  bootstrap: {
    key: "bootstrap",
    text: "Bootstrap",
    bgColor: "#553C81",
    icon: "SiBootstrap",
  },
  dart: { key: "dart", text: "Dart", bgColor: "#3CB5FC", icon: "SiDart" },
  docker: {
    key: "docker",
    text: "Docker",
    bgColor: "#00AFFF",
    icon: "SiDocker",
  },
  electron: {
    key: "electron",
    text: "ElectronJS",
    bgColor: "#252A38",
    icon: "SiElectron",
  },
  flutter: {
    key: "flutter",
    text: "Flutter",
    bgColor: "#01579B",
    icon: "SiFlutter",
  },
  gatsby: {
    key: "gatsby",
    text: "Gatsby",
    bgColor: "#742F9D",
    icon: "SiGatsby",
  },
  golang: {
    key: "golang",
    text: "Golang",
    bgColor: "#00D7E4",
    icon: "GrGolang",
  },
  graphql: {
    key: "graphql",
    text: "GraphQL",
    bgColor: "#FF32AF",
    icon: "SiGraphql",
  },
  // TODO: Continue here
  //   { key: "grunt", text: "GruntJS", bgColor: "#FFAA00" },
  //   { key: "gulp", text: "GulpJS", bgColor: "#F34945" },
  //   { key: "html5", text: "HTML5", bgColor: "#F9490C" },
  //   { key: "ionic", text: "Ionic", bgColor: "#008FFB" },
  //   { key: "jest", text: "Jest", bgColor: "#E53B07" },
  //   { key: "js", text: "Javascript", bgColor: "#F0DB4F" },
  //   { key: "jss", text: "JS in CSS", bgColor: "#F272B3" }, // No icon
  //   { key: "laravel", text: "Laravel", bgColor: "#F35045" },
  //   { key: "less", text: "Less", bgColor: "#003F71" },
  //   { key: "materialui", text: "Material UI", bgColor: "#008AD5" },
  //   { key: "mongodb", text: "Mongo DB", bgColor: "#439936" },
  //   { key: "mysql", text: "MySQL", bgColor: "#4479A1" },
  //   { key: "nextjs", text: "NextJS", bgColor: "#111111" },
  //   { key: "nodejs", text: "NodeJS", bgColor: "#67C83D" },
  //   { key: "npm", text: "NPM", bgColor: "#CB3837" },
  //   { key: "postgre", text: "PostgreSQL", bgColor: "#006794" },
  //   { key: "php", text: "PHP", bgColor: "#6D7DB6" },
  //   { key: "pwa", text: "PWA", bgColor: "#6906CD" },
  //   { key: "python", text: "Python", bgColor: "#5166BC" },
  //   { key: "redux", text: "Redux", bgColor: "#8448C0" },
  //   { key: "react", text: "ReactJS", bgColor: "#35D8FF" },
  //   { key: "sass", text: "Sass", bgColor: "#E5669F" },
  //   { key: "sencha", text: "SenchaJS", bgColor: "#95CA40" },
  //   { key: "snowpack", text: "Snowpack", bgColor: "#535EFF" }, // No icon
  //   { key: "svelte", text: "Svelte", bgColor: "#FF3B00" },
  //   { key: "tailwind", text: "TailwindCSS", bgColor: "#00CAB8" },
  //   { key: "ts", text: "Typescript", bgColor: "#0079CA" },
  //   { key: "vue", text: "VueJS", bgColor: "#41B783" },
  //   { key: "webpack", text: "WebpackJS", bgColor: "#0079C4" },
  //   { key: "yarn", text: "Yarn", bgColor: "#0099C5" },
  //   { key: "reactnative", text: "ReactNative", bgColor: "#4F1CFF" },
  //   { key: "airbnbenzyme", text: "Airbnb Enzyme", bgColor: "#FC5C64" }, // No icon
  //   { key: "express", text: "ExpressJS", bgColor: "#404040" }, // No icon
  //   { key: "styledcomponents", text: "Styled Components", bgColor: "#DD6F93" },
  //   { key: "cssmodules", text: "CSS Modules", bgColor: "#FF595D" },
  //   { key: "handlebars", text: "Handlebars", bgColor: "#F0772B" }, // No icon
}

// export const TECH_SKILLS_BY_ROLE: ITechSkillsByRoles = {
//   frontend: completeGridColumns({
//     techSkills: [
//       17, 38, 1, 45, 0, 32, 39, 31, 3, 2, 9, 16, 43, 18, 20, 33, 37, 36, 4, 6,
//       12, 13, 21, 24, 46, 47,
//     ],
//   }),
//   backend: completeGridColumns({
//     techSkills: [17, 38, 5, 6, 10, 11, 23, 44, 19, 30, 22, 25, 26, 27, 28],
//   }),
//   mobile: completeGridColumns({ techSkills: [17, 15, 42, 5, 8, 29] }),
//   desktop: completeGridColumns({ techSkills: [17, 5, 7, 15, 4, 8] }),
// }

export const TECH_SKILLS_BY_ROLE: ITechSkillsByRoles = {
  frontend: completeGridColumns({
    techSkills: ["angular"],
  }),
  backend: completeGridColumns({
    techSkills: ["angular"],
  }),
  mobile: completeGridColumns({ techSkills: ["angular"] }),
  desktop: completeGridColumns({ techSkills: ["angular"] }),
}
