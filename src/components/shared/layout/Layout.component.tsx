import React from "react";
import PropTypes from "prop-types";

import { LayoutWrapper, MainWrapper } from "./Layout.styles";
import Sidebar from "./Sidebar/Sidebar.component";

type LayoutProps = {
  children: React.ReactNode;
  switchTheme: Function;
};

const Layout: React.FC<LayoutProps> = ({ children, switchTheme }) => {
  return (
    <LayoutWrapper>
      <Sidebar switchTheme={switchTheme} />
      <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
  );
};
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  switchTheme: PropTypes.func.isRequired,
};

export default Layout;
