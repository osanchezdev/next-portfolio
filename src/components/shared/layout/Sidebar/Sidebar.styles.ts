import styled from "styled-components"
import { motion } from "framer-motion"
import { darken } from "polished"
import { device } from "../../../../styles/mediaQueries"

export const SidebarOverlay = styled(motion.div)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`

export const SidebarWrapper = styled(motion.aside)`
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  z-index: 999;
  padding: 0;
  height: 100vh;
  background: ${({ theme }) => darken(0.08, theme.colors.bg1)};
  text-align: center;
  box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.5);
`

export const Sidebar = styled(motion.div)`
  padding: 15px;
  display: none;
`

export const ExpandSidebarArrowWrapper = styled(motion.div)`
  background: ${({ theme }) => darken(0.08, theme.colors.bg1)};
  position: absolute;
  top: 70%;
  z-index: 1;
  border-radius: 10px 0 0 10px;
  box-shadow: -3px 7px 10px -6px rgba(0, 0, 0, 0.5);
  transition: right 300ms ease;
  &:active,
  &:focus {
    outline: none;
  }

  @media ${device.mobileS} {
    left: -41px;
  }
  @media ${device.laptop} {
    left: -44px;
  }
  @media ${device.desktop} {
    left: -62px;
  }
`

export const ExpandSidebarArrowButton = styled(motion.button)`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active,
  &:focus {
    background: transparent;
    border: none;
    outline: none;
  }
`

export const ExpandSidebarArrow = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => darken(0.08, theme.colors.text)};

  @media ${device.mobileS} {
    padding: 25px 6px;
    height: 20px;
    font-size: 19px;
  }
  @media ${device.laptop} {
    padding: 25px 2px;
    height: 10px;
    font-size: 28px;
  }
  @media ${device.desktop} {
    padding: 35px 12px;
    height: 40px;
    font-size: 38px;
  }
`

export const SidebarTitle = styled.h5`
  letter-spacing: 1px;
  margin-top: 0;

  @media ${device.mobileS} {
    margin-bottom: 5px;
    font-size: 1.3rem;
  }
  @media ${device.mobileM} {
    margin-bottom: 5px;
    font-size: 1.4rem;
  }
  @media ${device.tablet} {
    margin-bottom: 5px;
  }
  @media ${device.laptop} {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
`

export const LogoWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;

  @media ${device.mobileS} {
    height: 80px;
    margin: 25px 80px;
  }
  @media ${device.mobileM} {
    height: 120px;
    margin: 25px 45px;
  }
  @media ${device.desktop} {
    height: 200px;
  }
`

export const SidebarDescription = styled.p`
  font-weight: 300;

  @media ${device.mobileS} {
    margin: 15px 0;
    font-size: 18px;
    line-height: 24px;
  }
  @media ${device.mobileM} {
    margin: 15px 0;
    font-size: 18px;
    line-height: 24px;
  }
  @media ${device.tablet} {
    margin: 40px 0;
    line-height: 20px;
    font-size: 16px;
  }
  @media ${device.laptop} {
    margin: 20px 0;
    line-height: 25px;
    font-size: 18px;
  }
  @media ${device.desktop} {
    margin: 20px 0;
    line-height: 40px;
    font-size: 26px;
  }
`
export const SidebarProfileLinks = styled.div`
  display: flex;
  justify-content: space-around;
`
export const ProfileItem = styled.span`
  display: flex;
  align-items: center;
  font-size: 32px;
  height: 32px;
  & a {
    height: inherit;
  }
  @media ${device.laptop} {
    font-size: 42px;
    height: 42px;
  }
`

export const Navbar = styled.nav`
  @media ${device.laptop} {
    margin: 2rem 0;
  }
  @media ${device.desktop} {
    margin: 3rem 0;
  }
`

export const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NavbarItem = styled.li`
  padding-left: 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
  & svg {
    margin-right: 10px;
  }

  @media ${device.mobileS} {
    margin: 5px 0;
    font-size: 1.1rem;
  }
  @media ${device.mobileM} {
    margin: 12px 0;
    font-size: 1.3rem;
  }
  @media ${device.tablet} {
    margin: 25px 0;
  }
  @media ${device.laptop} {
    margin: 15px 0;
  }
  @media ${device.desktop} {
    margin: 35px 0;
    font-size: 1.9rem;
  }
`
