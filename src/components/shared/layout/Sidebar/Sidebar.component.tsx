import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../../../context/appContext";
import {
  FaLinkedin,
  FaGithubSquare,
  FaUserAlt,
  FaLaptopCode,
  FaBriefcase,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaChevronLeft,
} from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch.component";
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
  ExpandSidebarArrowWrapper,
  ExpandSidebarArrow,
} from "./Sidebar.styles";

type SidebarProps = {
  switchTheme: Function;
};

const COLLAPSED_WIDTH = "0";
const EXPANDED_WIDTH = "213px";

export const SidebarVariants = {
  expanded: {
    width: EXPANDED_WIDTH,
    transition: { when: "beforeChildren" },
  },
  collapsed: {
    width: COLLAPSED_WIDTH,
    transition: { when: "afterChildren" },
  },
};

export const SidebarContentVariants = {
  expanded: {
    opacity: 1,
    display: "block",
  },
  collapsed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};
export const ArrowButtonVariants = {
  expanded: {
    rotateZ: 0,
  },
  collapsed: {
    rotateZ: 180,
  },
};

const Sidebar: React.FC<SidebarProps> = ({ switchTheme }) => {
  const { isSidebarExpanded, setIsSidebarExpanded } = useContext(AppContext);

  return (
    <SidebarWrapper
      initial={isSidebarExpanded ? "expanded" : "collapsed"}
      animate={isSidebarExpanded ? "expanded" : "collapsed"}
      variants={SidebarVariants}
    >
      <StyledSidebar variants={SidebarContentVariants}>
        <SidebarTitle>Oscar Sánchez</SidebarTitle>
        <LogoWrapper>
          <Logo src="https://via.placeholder.com/100x100.png?text=Image+Profile" />
        </LogoWrapper>
        <SidebarDescription>
          Hi, my name is Oscar Sánchez and I&apos;m a Full Stack Web Developer.
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
      </StyledSidebar>
      <ExpandSidebarArrowWrapper>
        <ExpandSidebarArrow
          animate={isSidebarExpanded ? "expanded" : "collapsed"}
          variants={ArrowButtonVariants}
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        >
          <FaChevronLeft />
        </ExpandSidebarArrow>
      </ExpandSidebarArrowWrapper>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  switchTheme: PropTypes.func.isRequired,
};

export default Sidebar;
