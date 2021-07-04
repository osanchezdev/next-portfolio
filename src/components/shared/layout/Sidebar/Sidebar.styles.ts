import styled from "styled-components";
import { motion } from "framer-motion";
import { darken } from "polished";
// import { device } from "../../../../styles/mediaQueries";

export const SidebarWrapper = styled(motion.aside)`
  padding: 0;
  position: relative;
  background: ${({ theme }) => darken(0.08, theme.colors.neutral_primary)};
  text-align: center;
  box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.5);
`;
export const Sidebar = styled(motion.div)`
  padding: 20px;
  display: none;
`;

export const ExpandSidebarArrowWrapper = styled.div`
  background: ${({ theme }) => darken(0.08, theme.colors.neutral_primary)};
  position: absolute;
  right: -35px;
  top: 25px;
  z-index: 1;
  border-radius: 0 10px 10px 0;
  box-shadow: 5px 4px 10px -6px rgba(0, 0, 0, 0.5);
`;

export const ExpandSidebarArrowButton = styled(motion.button)`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpandSidebarArrow = styled.div`
  color: ${({ theme }) => darken(0.08, theme.colors.text)};
  height: 16px;
`;

export const SidebarTitle = styled.h5`
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
