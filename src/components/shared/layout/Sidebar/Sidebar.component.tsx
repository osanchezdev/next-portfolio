import React from "react"
import PropTypes from "prop-types"
import {
  FaLinkedin,
  FaGithubSquare,
  FaUserAlt,
  FaLaptopCode,
  FaBriefcase,
  FaFileAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch.component"
import {
  SidebarWrapper,
  Sidebar as StyledSidebar,
  SidebarTitle,
  LogoWrapper,
  Logo,
  SidebarDescription,
  SidebarProfileLinks,
  ProfileItem,
  Navbar,
  NavbarList,
  NavbarItem,
} from "./Sidebar.styles"

type SidebarProps = {
  switchTheme: any
}

const Sidebar: React.FC<SidebarProps> = ({ switchTheme }) => {
  return (
    <SidebarWrapper>
      <StyledSidebar>
        <SidebarTitle>Oscar Sánchez</SidebarTitle>
        <LogoWrapper>
          <Logo src="https://via.placeholder.com/100x100.png?text=Image+Profile" />
        </LogoWrapper>
        <SidebarDescription>
          Hi, my name is Oscar Sánchez and I'm a Full Stack Web Developer.
          Welcome to my personal website!
        </SidebarDescription>
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
        <Navbar>
          <NavbarList>
            <NavbarItem>
              <FaUserAlt /> <span>About me</span>
            </NavbarItem>
            <NavbarItem>
              <FaBriefcase />
              <span>Services</span>
            </NavbarItem>
            <NavbarItem>
              <FaLaptopCode />
              <span>Portfolio</span>
            </NavbarItem>
            <NavbarItem>
              <FaFileAlt />
              <span>Resume</span>
            </NavbarItem>
            <NavbarItem>
              <FaEnvelopeOpenText />
              <span>Contact</span>
            </NavbarItem>
          </NavbarList>
        </Navbar>
        <ThemeSwitch switchTheme={switchTheme} />
        <div>
          <button>Button</button>
        </div>
      </StyledSidebar>
    </SidebarWrapper>
  )
}

Sidebar.propTypes = {
  switchTheme: PropTypes.func.isRequired,
}

export default Sidebar
