import _ from "lodash"
import { ITechSkillItem, ITechSkillsByRoles, SkillRoleTypes } from "../../types"

interface completeGridColumnsProps {
  techSkills: Array<number>
}

const MAX_TECH_ITEMS = 40

const completeGridColumns = ({
  techSkills,
}: completeGridColumnsProps): number[] =>
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

export const TECH_SKILLS_DATA: ITechSkillItem[] = [
  { key: "angular", text: "Angular", bgColor: "#ff002e" },
  { key: "css3", text: "CSS3", bgColor: "#379AD6" },
  { key: "antd", text: "Ant Design", bgColor: "#FF5E63" },
  { key: "babel", text: "Babel", bgColor: "#FFDD21" },
  { key: "bootstrap", text: "Bootstrap", bgColor: "#553C81" },
  { key: "dart", text: "Dart", bgColor: "#3CB5FC" },
  { key: "docker", text: "Docker", bgColor: "#00AFFF" },
  { key: "electron", text: "ElectronJS", bgColor: "#252A38" },
  { key: "flutter", text: "Flutter", bgColor: "#01579B" },
  { key: "gatsby", text: "Gatsby", bgColor: "#742F9D" },
  { key: "golang", text: "Golang", bgColor: "#00D7E4" },
  { key: "graphql", text: "GraphQL", bgColor: "#FF32AF" },
  { key: "grunt", text: "GruntJS", bgColor: "#FFAA00" },
  { key: "gulp", text: "GulpJS", bgColor: "#F34945" },
  { key: "html5", text: "HTML5", bgColor: "#F9490C" },
  { key: "ionic", text: "Ionic", bgColor: "#008FFB" },
  { key: "jest", text: "Jest", bgColor: "#E53B07" },
  { key: "js", text: "Javascript", bgColor: "#F0DB4F" },
  { key: "jss", text: "JS in CSS", bgColor: "#F272B3" },
  { key: "laravel", text: "Laravel", bgColor: "#F35045" },
  { key: "less", text: "LESS", bgColor: "#003F71" },
  { key: "materialui", text: "Material UI", bgColor: "#008AD5" },
  { key: "mongodb", text: "Mongo DB", bgColor: "#439936" },
  { key: "mysql", text: "MySQL", bgColor: "#4479A1" },
  { key: "nextjs", text: "NextJS", bgColor: "#111111" },
  { key: "nodejs", text: "NodeJS", bgColor: "#67C83D" },
  { key: "npm", text: "NPM", bgColor: "#CB3837" },
  { key: "postgre", text: "PostgreSQL", bgColor: "#006794" },
  { key: "php", text: "PHP", bgColor: "#6D7DB6" },
  { key: "pwa", text: "PWA", bgColor: "#6906CD" },
  { key: "python", text: "Python", bgColor: "#5166BC" },
  { key: "redux", text: "Redux", bgColor: "#8448C0" },
  { key: "react", text: "ReactJS", bgColor: "#35D8FF" },
  { key: "sass", text: "SASS", bgColor: "#E5669F" },
  { key: "sencha", text: "SenchaJS", bgColor: "#95CA40" },
  { key: "snowpack", text: "Snowpack", bgColor: "#535EFF" },
  { key: "svelte", text: "Svelte", bgColor: "#FF3B00" },
  { key: "tailwind", text: "TailwindCSS", bgColor: "#00CAB8" },
  { key: "ts", text: "Typescript", bgColor: "#0079CA" },
  { key: "vue", text: "VueJS", bgColor: "#41B783" },
  { key: "webpack", text: "WebpackJS", bgColor: "#0079C4" },
  { key: "yarn", text: "YARN", bgColor: "#0099C5" },
  { key: "reactnative", text: "ReactNative", bgColor: "#4F1CFF" },
  { key: "airbnbenzyme", text: "Airbnb Enzyme", bgColor: "#FC5C64" },
  { key: "express", text: "ExpressJS", bgColor: "#404040" },
  { key: "styledcomponents", text: "Styled Components", bgColor: "#DD6F93" },
  { key: "cssmodules", text: "CSS Modules", bgColor: "#FF595D" },
  { key: "handlebars", text: "Handlebars", bgColor: "#F0772B" },
]

export const TECH_SKILLS_BY_ROLE: ITechSkillsByRoles = {
  frontend: completeGridColumns({
    techSkills: [
      17, 38, 1, 45, 0, 32, 39, 31, 3, 2, 9, 16, 43, 18, 20, 33, 37, 36, 4, 6,
      12, 13, 21, 24, 46, 47,
    ],
  }),
  backend: completeGridColumns({
    techSkills: [17, 38, 5, 6, 10, 11, 23, 44, 19, 30, 22, 25, 26, 27, 28],
  }),
  mobile: completeGridColumns({ techSkills: [17, 15, 42, 5, 8, 29] }),
  desktop: completeGridColumns({ techSkills: [17, 5, 7, 15, 4, 8] }),
}
