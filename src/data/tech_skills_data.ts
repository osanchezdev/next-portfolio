import _ from "lodash"
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
  "others",
]

export const TECH_SKILLS_DATA: {
  [key: string]: ITechSkillItem
} = {
  angularjs: {
    key: "angularjs",
    text: "AngularJS",
    bgColor: "#ff002e",
    icon: "SiAngularjs",
  },
  angular: {
    key: "angular",
    text: "Angular",
    bgColor: "#ff002e",
    icon: "SiAngular",
  },
  css3: {
    key: "css3",
    text: "CSS3",
    bgColor: "#379AD6",
    icon: "SiCss3",
  },
  antd: {
    key: "antd",
    text: "Ant Design",
    bgColor: "#FF5E63",
    icon: "AiOutlineAntDesign",
  },
  babel: {
    key: "babel",
    text: "Babel",
    bgColor: "#FFDD21",
    iconColor: "#333",
    icon: "SiBabel",
  },
  bootstrap: {
    key: "bootstrap",
    text: "Bootstrap",
    bgColor: "#553C81",
    icon: "SiBootstrap",
  },
  dart: {
    key: "dart",
    text: "Dart",
    bgColor: "#3CB5FC",
    icon: "SiDart",
  },
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
  },
  graphql: {
    key: "graphql",
    text: "GraphQL",
    bgColor: "#FF32AF",
    icon: "SiGraphql",
  },
  grunt: {
    key: "grunt",
    text: "Grunt",
    bgColor: "#FFAA00",
    iconColor: "#333",
    icon: "SiGrunt",
  },
  gulp: {
    key: "gulp",
    text: "GulpJS",
    bgColor: "#F34945",
    icon: "SiGulp",
  },
  html: {
    key: "html5",
    text: "HTML5",
    bgColor: "#F9490C",
    icon: "SiHtml5",
  },
  ionic: {
    key: "ionic",
    text: "Ionic",
    bgColor: "#008FFB",
    icon: "SiIonic",
  },
  jest: {
    key: "jest",
    text: "Jest",
    bgColor: "#E53B07",
    icon: "SiJest",
  },
  javascript: {
    key: "js",
    text: "Javascript",
    bgColor: "#F0DB4F",
    iconColor: "#333",
    icon: "SiJavascript",
  },
  postcss: {
    key: "postcss",
    text: "PostCSS",
    bgColor: "#FF3B00",
    icon: "SiPostcss",
  },
  laravel: {
    key: "laravel",
    text: "Laravel",
    bgColor: "#F35045",
    icon: "SiLaravel",
  },
  less: {
    key: "less",
    text: "Less",
    bgColor: "#003F71",
    icon: "FaLess",
  },
  materialui: {
    key: "materialui",
    text: "Material UI",
    bgColor: "#008AD5",
    icon: "SiMaterialUi",
  },
  mongodb: {
    key: "mongodb",
    text: "Mongo DB",
    bgColor: "#439936",
    icon: "SiMongodb",
  },
  redis: {
    key: "redis",
    text: "Redis",
    bgColor: "#8C2525",
    icon: "SiRedis",
  },
  mysql: {
    key: "mysql",
    text: "MySQL",
    bgColor: "#4479A1",
    icon: "GrMysql",
  },
  nextjs: {
    key: "nextjs",
    text: "NextJS",
    bgColor: "#111111",
    icon: "SiNextDotJs",
  },
  nodejs: {
    key: "nodejs",
    text: "NodeJS",
    bgColor: "#67C83D",
    icon: "SiNodeDotJs",
  },
  npm: {
    key: "npm",
    text: "NPM",
    bgColor: "#CB3837",
    icon: "SiNpm",
  },
  postgresql: {
    key: "postgre",
    text: "PostgreSQL",
    bgColor: "#006794",
    icon: "SiPostgresql",
  },
  php: {
    key: "php",
    text: "PHP",
    bgColor: "#6D7DB6",
    icon: "SiPhp",
  },
  redux: {
    key: "redux",
    text: "Redux",
    bgColor: "#8448C0",
    icon: "SiRedux",
  },
  react: {
    key: "react",
    text: "ReactJS",
    bgColor: "#35D8FF",
    icon: "SiReact",
  },
  sass: {
    key: "sass",
    text: "Sass",
    bgColor: "#E5669F",
    icon: "SiSass",
  },
  sencha: {
    key: "sencha",
    text: "SenchaJS",
    bgColor: "#95CA40",
    icon: "SiSencha",
  },
  svelte: {
    key: "svelte",
    text: "Svelte",
    bgColor: "#FF3B00",
    icon: "SiSvelte",
  },
  tailwindcss: {
    key: "tailwind",
    text: "TailwindCSS",
    bgColor: "#00CAB8",
    icon: "SiTailwindcss",
  },
  typescript: {
    key: "ts",
    text: "Typescript",
    bgColor: "#0079CA",
    icon: "SiTypescript",
  },
  vuejs: {
    key: "vue",
    text: "VueJS",
    bgColor: "#41B783",
    icon: "RiVuejsFill",
  },
  webpack: {
    key: "webpack",
    text: "Webpack",
    bgColor: "#0079C4",
    icon: "SiWebpack",
  },
  yarn: {
    key: "yarn",
    text: "Yarn",
    bgColor: "#0099C5",
    icon: "SiYarn",
  },
  reactnative: {
    key: "reactnative",
    text: "ReactNative",
    bgColor: "#4F1CFF",
    icon: "SiReact",
  },
  express: {
    key: "express",
    text: "ExpressJS",
    bgColor: "#404040",
  },
  styledcomponents: {
    key: "styledcomponents",
    text: "Styled Components",
    bgColor: "#DD6F93",
    icon: "SiStyledComponents",
  },
  aws: {
    key: "aws",
    text: "AWS",
    bgColor: "#FE9900",
    icon: "SiAmazonaws",
  },
  cssmodules: {
    key: "cssmodules",
    text: "CSS Modules",
    bgColor: "#FF595D",
  },
  composer: {
    key: "composer",
    text: "Composer",
    bgColor: "#644D31",
    icon: "SiComposer",
  },
  prettier: {
    key: "prettier",
    text: "Prettier",
    bgColor: "#1A2B34",
    icon: "SiPrettier",
  },
  jquery: {
    key: "jquery",
    text: "jQuery",
    bgColor: "#1E78AB",
    icon: "SiJquery",
  },
  python: {
    key: "python",
    text: "Python",
    bgColor: "#5268BD",
    icon: "SiPython",
  },
  flask: {
    key: "flask",
    text: "Flask",
    bgColor: "#111111",
    icon: "SiFlask",
  },
  git: {
    key: "git",
    text: "Git",
    bgColor: "#F05030",
    icon: "SiGit",
  },
  svn: {
    key: "svn",
    text: "Subversion",
    bgColor: "#819DCA",
    icon: "SiSubversion",
  },
  firebase: {
    key: "firebase",
    text: "Firebase",
    bgColor: "#EE7F0E",
    icon: "SiFirebase",
  },
}

export const TECH_SKILLS_BY_ROLE: ITechSkillsByRoles = {
  frontend: completeGridColumns({
    techSkills: [
      "javascript",
      "angularjs",
      "css3",
      "angular",
      "antd",
      "react",
      "babel",
      "bootstrap",
      "gatsby",
      "html",
      "postcss",
      "less",
      "materialui",
      "nextjs",
      "redux",
      "sass",
      "sencha",
      "svelte",
      "vuejs",
      "tailwindcss",
      "styledcomponents",
      "cssmodules",
      "jquery",
    ],
  }),
  backend: completeGridColumns({
    techSkills: [
      "javascript",
      "golang",
      "graphql",
      "laravel",
      "mongodb",
      "redis",
      "mysql",
      "nodejs",
      "postgresql",
      "php",
      "typescript",
      "express",
      "aws",
      "python",
      "firebase",
    ],
  }),
  mobile: completeGridColumns({
    techSkills: [
      "javascript",
      "typescript",
      "dart",
      "flutter",
      "reactnative",
      "ionic",
    ],
  }),
  others: completeGridColumns({
    techSkills: [
      "electron",
      "grunt",
      "gulp",
      "npm",
      "prettier",
      "webpack",
      "yarn",
      "composer",
      "git",
      "svn",
    ],
  }),
}
