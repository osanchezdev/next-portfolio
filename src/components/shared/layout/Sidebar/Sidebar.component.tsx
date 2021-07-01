import React, { useContext } from "react";
import { AppContext } from "../../../../context/appContext";
import {
  FaLinkedin,
  FaGithubSquare,
  FaUserAlt,
  FaLaptopCode,
  FaBriefcase,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaChevronRight,
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
  ExpandSidebarArrowButton,
  ExpandSidebarArrow,
} from "./Sidebar.styles";
import {
  sidebarVariants,
  sidebarContentVariants,
  arrowButtonVariants,
} from "./Sidebar.variants";

type SidebarProps = {
  switchTheme: Function;
};

const Sidebar: React.FC<SidebarProps> = ({ switchTheme }) => {
  const { isSidebarExpanded, setIsSidebarExpanded } = useContext(AppContext);

  return (
    <SidebarWrapper
      initial={isSidebarExpanded ? "expanded" : "collapsed"}
      animate={isSidebarExpanded ? "expanded" : "collapsed"}
      variants={sidebarVariants}
    >
      <StyledSidebar variants={sidebarContentVariants()}>
        <SidebarTitle>Oscar Sánchez</SidebarTitle>
        <LogoWrapper>
          <Logo src="https://cdn.fakercloud.com/avatars/axel_128.jpg" />
        </LogoWrapper>
        <SidebarDescription>
          Illum omnis quasi dicta exercitationem accusamus dicta et qui.
          Praesentium et reiciendis. Harum voluptatum.
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
          {/* TODO: pass to loop */}
          <NavbarList>
            <NavbarItem>
              <FaUserAlt /> <span>About me</span>
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
        <ThemeSwitch switchTheme={switchTheme} />
      </StyledSidebar>
      <ExpandSidebarArrowWrapper>
        <ExpandSidebarArrowButton
          initial="collapsed"
          animate={isSidebarExpanded ? "expanded" : "collapsed"}
          variants={arrowButtonVariants()}
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        >
          <ExpandSidebarArrow>
            <FaChevronRight />
          </ExpandSidebarArrow>
        </ExpandSidebarArrowButton>
      </ExpandSidebarArrowWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
