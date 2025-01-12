'use client'
import { FC, useContext } from "react"
import Link from "next/link"
import Icon from "../../Icon/Icon.component"
import Divider from "../../Divider/Divider.component"
import LazyImage from "../../LazyImage/LazyImage.component"
import { AppContext } from "../../../../context/appContext"
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch.component"
import {
  sidebarVariants,
  sidebarContentVariants,
  arrowButtonVariants,
  sidebarOverlayVariants,
  arrowButtonWrapperVariants,
} from "./Sidebar.variants"

import {
  SidebarWrapper,
  Sidebar as SSidebar,
  SidebarTitle,
  LogoWrapper,
  SidebarDescription,
  SidebarProfileLinks,
  ProfileItem,
  Navbar,
  NavbarList,
  NavbarItem,
  ExpandSidebarArrowWrapper,
  ExpandSidebarArrowButton,
  ExpandSidebarArrow,
  SidebarOverlay,
} from "./Sidebar.styles"

const PROFILE_IMAGE = "/assets/images/profile.jpg"

const Sidebar: FC = () => {
  const { isSidebarExpanded, toggleExpandSidebar } = useContext(AppContext)

  const scrollTo = (id: string) => {
    if (toggleExpandSidebar) toggleExpandSidebar(false)
    document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <SidebarOverlay
        initial={"hide"}
        animate={isSidebarExpanded ? "show" : "hide"}
        variants={sidebarOverlayVariants}
        onClick={() => toggleExpandSidebar && toggleExpandSidebar(false)}
      />
      <SidebarWrapper
        initial={"collapsed"}
        animate={isSidebarExpanded ? "expanded" : "collapsed"}
        variants={sidebarVariants}
      >
        <SSidebar variants={sidebarContentVariants()}>
          <SidebarTitle>Oscar Sánchez</SidebarTitle>
          <LogoWrapper>
            <LazyImage src={PROFILE_IMAGE} alt="oscar-sanchez-profile-image" fit="fill"/>
          </LogoWrapper>
          <SidebarDescription>
            Welcome to my personal website.
          </SidebarDescription>
          <SidebarProfileLinks>
            <ProfileItem>
              <Link
                href="https://www.linkedin.com/in/ojsm45/?locale=en_US"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="FaLinkedin" />
              </Link>
            </ProfileItem>
            <ProfileItem>
              <Link href="https://github.com/osanchezdev" target="_blank" rel="noopener noreferrer">
                <Icon icon="FaGithubSquare" />
              </Link>
            </ProfileItem>
          </SidebarProfileLinks>
          <Divider margin="2rem auto 2rem auto" />
          <Navbar>
            <NavbarList>
              <NavbarItem onClick={() => scrollTo("projects-section")}>
                <Icon icon="FaLaptopCode" />
                <span>Portfolio</span>
              </NavbarItem>
              <NavbarItem onClick={() => scrollTo("about-section")}>
                <Icon icon="FaUserAlt" />
                <span>About me</span>
              </NavbarItem>
              <NavbarItem onClick={() => scrollTo("contact-section")}>
                <Icon icon="FaEnvelopeOpenText" />
                <span>Contact</span>
              </NavbarItem>
              {/* <NavbarItem>
                <FaFileAlt />
                <span>Resume</span>
              </NavbarItem> */}
            </NavbarList>
          </Navbar>
          <Divider margin="2rem auto 2rem auto" />
          <ThemeSwitch />
        </SSidebar>
        <ExpandSidebarArrowWrapper
          initial={"initial"}
          animate={"show"}
          variants={arrowButtonWrapperVariants}
        >
          <ExpandSidebarArrowButton
            aria-label="expand-collapse-sidebar"
            initial={"collapsed"}
            animate={isSidebarExpanded ? "expanded" : "collapsed"}
            variants={arrowButtonVariants()}
            onClick={() => toggleExpandSidebar && toggleExpandSidebar()}
          >
            <ExpandSidebarArrow>
              <Icon icon="FaChevronLeft" />
            </ExpandSidebarArrow>
          </ExpandSidebarArrowButton>
        </ExpandSidebarArrowWrapper>
      </SidebarWrapper>
    </>
  )
}

export default Sidebar
