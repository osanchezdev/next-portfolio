import styled from "styled-components"
import { motion } from "framer-motion"
import { darken } from "polished"
import { device } from "../../../../styles/mediaQueries"

export const SidebarWrapper = styled(motion.aside)`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  padding: 0;
  height: 100vh;
  background: ${({ theme }) => darken(0.08, theme.colors.neutral_primary)};
  text-align: center;
  box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.5);
`

export const Sidebar = styled(motion.div)`
  padding: 15px;
  display: none;
`

export const ExpandSidebarArrowWrapper = styled.div`
  background: ${({ theme }) => darken(0.08, theme.colors.neutral_primary)};
  position: absolute;
  right: -35px;
  top: 25%;
  z-index: 1;
  border-radius: 0 10px 10px 0;
  box-shadow: 5px 4px 10px -6px rgba(0, 0, 0, 0.5);
  &:active,
  &:focus {
    outline: none;
  }
`

export const ExpandSidebarArrowButton = styled(motion.button)`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 15px 10px;
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
  height: 26px;
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
`

export const LogoWrapper = styled.div`
  @media ${device.tablet} {
    margin: 25px 0;
  }
  @media ${device.laptop} {
    margin: 25px 0;
  }
`

export const Logo = styled.img`
  border-radius: 15%;
  max-width: 100%;

  @media ${device.mobileS} {
    max-width: 60%;
  }
  @media ${device.mobileM} {
    max-width: 70%;
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
    line-height: 20px;
    font-size: 16px;
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
`

export const Navbar = styled.nav``

export const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NavbarItem = styled.li`
  display: flex;
  align-items: baseline;
  padding-left: 35px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
  & svg {
    margin-right: 10px;
  }

  @media ${device.mobileS} {
    margin: 5px 0;
    font-size: 16px;
  }
  @media ${device.mobileM} {
    margin: 12px 0;
    font-size: 20px;
  }
  @media ${device.tablet} {
    margin: 25px 0;
  }
  @media ${device.laptop} {
    margin: 15px 0;
  }
  @media ${device.laptopL} {
    padding-left: 35px;
    font-size: 18px;
  }
`
