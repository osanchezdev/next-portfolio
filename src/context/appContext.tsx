import React, { createContext, useCallback, useState } from "react"

type AppState = {
  isSidebarExpanded: boolean
  isOnline: boolean
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
  const [isOnline, setIsOnline] = useState<boolean>(true)
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false)
  const switchTheme = useCallback(
    (newValue: boolean) => setIsLightTheme(newValue),
    []
  )

  const checkConnection = async () => {
    setIsOnline(window.navigator.onLine)
  }

  const toggleExpandSidebar = (expandSidebar = false): void =>
    setIsSidebarExpanded(expandSidebar ? expandSidebar : !isSidebarExpanded)

  return (
    <AppContext.Provider
      value={{
        isOnline,
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
