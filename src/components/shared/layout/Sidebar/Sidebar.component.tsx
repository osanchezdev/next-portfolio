import React, { useContext } from "react"
import { AppContext } from "../../../../context/appContext"
import {
  FaLinkedin,
  FaGithubSquare,
  FaUserAlt,
  FaLaptopCode,
  FaBriefcase,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaChevronRight,
} from "react-icons/fa"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch.component"
import {
  SidebarWrapper,
  Sidebar as SSidebar,
  SidebarTitle,
  LogoWrapper,
  Logo,
  SidebarDescription,
  SidebarProfileLinks,
  ProfileItem,
  Navbar,
  NavbarList,
  NavbarItem,
  ExpandSidebarArrowWrapper,
  ExpandSidebarArrowButton,
  ExpandSidebarArrow,
} from "./Sidebar.styles"
import {
  sidebarVariants,
  sidebarContentVariants,
  arrowButtonVariants,
} from "./Sidebar.variants"
import Divider from "../../Divider/Divider.component"

const Sidebar: React.FC = () => {
  const { isSidebarExpanded, toggleExpandSidebar } = useContext(AppContext)

  return (
    <SidebarWrapper
      initial={isSidebarExpanded ? "expanded" : "collapsed"}
      animate={isSidebarExpanded ? "expanded" : "collapsed"}
      variants={sidebarVariants}
    >
      <SSidebar variants={sidebarContentVariants()}>
        <SidebarTitle>Oscar Sánchez</SidebarTitle>
        <LogoWrapper>
          <Logo src="https://cdn.fakercloud.com/avatars/axel_128.jpg" />
        </LogoWrapper>
        <SidebarDescription>Welcome to my personal website.</SidebarDescription>
        <SidebarProfileLinks>
          <ProfileItem>
            <a href="_blank">
              <FaLinkedin />
            </a>
          </ProfileItem>
          <ProfileItem>
            <a href="_blank">
              <FaGithubSquare />
            </a>
          </ProfileItem>
        </SidebarProfileLinks>
        <Divider />
        <Navbar>
          <NavbarList>
            <NavbarItem>
              <FaUserAlt />
              <span>About me</span>
            </NavbarItem>
            <NavbarItem>
              <FaBriefcase />
              <span>Experience</span>
            </NavbarItem>
            <NavbarItem>
              <FaLaptopCode />
              <span>Portfolio</span>
            </NavbarItem>
            <NavbarItem>
              <FaEnvelopeOpenText />
              <span>Contact</span>
            </NavbarItem>
            <NavbarItem>
              <FaFileAlt />
              <span>Resume</span>
            </NavbarItem>
          </NavbarList>
        </Navbar>
        <Divider />
        <ThemeSwitch />
      </SSidebar>
      <ExpandSidebarArrowWrapper>
        <ExpandSidebarArrowButton
          initial="collapsed"
          animate={isSidebarExpanded ? "expanded" : "collapsed"}
          variants={arrowButtonVariants()}
          onClick={() => toggleExpandSidebar && toggleExpandSidebar()}
        >
          <ExpandSidebarArrow>
            <FaChevronRight />
          </ExpandSidebarArrow>
        </ExpandSidebarArrowButton>
      </ExpandSidebarArrowWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar
