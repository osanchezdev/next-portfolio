import React from "react"

import { LayoutWrapper, MainWrapper } from "./Layout.styles"
import Sidebar from "./Sidebar/Sidebar.component"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
  )
}
export default Layout
