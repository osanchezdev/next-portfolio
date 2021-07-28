import React, { createContext, useState } from "react"

type AppState = {
  isSidebarExpanded: boolean
  isOnline: boolean
  toggleExpandSidebar: Function
}

const initialState: AppState = {
  isSidebarExpanded: false,
  isOnline: true,
  toggleExpandSidebar: () => {},
}

export const AppContext = createContext<AppState>(initialState)

interface AppProviderProps {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps): React.ReactElement => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  const checkConnection = async () => {
    setIsOnline(window.navigator.onLine)
  }

  const toggleExpandSidebar = (): void => {
    setIsSidebarExpanded(!isSidebarExpanded)
    window.dispatchEvent(new Event("resize"))
  }

  return (
    <AppContext.Provider
      value={{
        isOnline,
        isSidebarExpanded,
        toggleExpandSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
