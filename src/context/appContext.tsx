import React, { createContext, useState } from "react"

type AppState = {
  isSidebarExpanded: boolean
  isOnline?: boolean
  isLightTheme?: boolean
  switchTheme?: Function
  toggleExpandSidebar?: Function
}

const initialState: AppState = {
  isSidebarExpanded: false,
  isOnline: true,
}

export const AppContext = createContext<Partial<AppState>>(initialState)

interface AppProviderProps {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps): React.ReactElement => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false)
  const switchTheme = (newValue: boolean) => setIsLightTheme(newValue)

  const toggleExpandSidebar = (expandSidebar = false): void =>
    setIsSidebarExpanded(expandSidebar ? expandSidebar : !isSidebarExpanded)

  return (
    <AppContext.Provider
      value={{
        isLightTheme,
        isSidebarExpanded,
        switchTheme,
        toggleExpandSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
