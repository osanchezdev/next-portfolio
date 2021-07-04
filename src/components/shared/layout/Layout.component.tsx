import React from "react";

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
export default Layout;
