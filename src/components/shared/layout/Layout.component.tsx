import React from "react"
import dynamic from "next/dynamic"

import { LayoutWrapper, MainWrapper } from "./Layout.styles"

type LayoutProps = {
  children: React.ReactNode
}
const DynamicSidebar = dynamic(() => import("./Sidebar/Sidebar.component"))

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <DynamicSidebar />
      <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
  )
}
export default Layout
