import styled from "styled-components";
import { motion } from "framer-motion";
import { darken } from "polished";
// import { device } from "../../../../styles/mediaQueries";

export const SidebarWrapper = styled(motion.aside)`
  padding: 0;
  position: relative;
  background: ${({ theme }) => darken(0.08, theme.colors.neutral_primary)};
  text-align: center;
  box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.75);
`;
export const Sidebar = styled(motion.div)`
  padding: 20px;
`;

export const ExpandSidebarArrowWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  background: ${({ theme }) => darken(0.08, theme.colors.neutral_primary)};
  color: rgb(0, 0, 0);
  position: absolute;
  right: -35px;
  top: 25px;
  z-index: 1;
  border-radius: 0 10px 10px 0;
`;

export const ExpandSidebarArrow = styled(motion.button)`
  color: ${({ theme }) => darken(0.08, theme.colors.text)};
  background: transparent;
  border: none;
  outline: none;
  height: 16px;
  padding: 0 10px;
`;

export const SidebarTitle = styled.h3`
  letter-spacing: 1px;
  margin-top: 0;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img`
  border-radius: 15%;
`;
export const SidebarDescription = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: 300;
`;
export const SidebarProfileLinks = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding: 10px;
`;
export const ProfileItem = styled.span`
  & a > svg {
    fill: ${({ theme }) => theme.colors.text} !important;
    height: 25px;
    width: 25px;
  }
`;

export const Navbar = styled.nav``;

export const NavbarList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 40px;
  transition: color 200ms ease;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.8, theme.colors.text)};
  }
  & span {
    font-size: 18px;
  }
  & svg {
    margin-right: 10px;
  }
`;
