'use client'
import { createContext, ReactElement, ReactNode, useState } from "react"

type AppState = {
  isSidebarExpanded: boolean
  isOnline: boolean
  isLightTheme: boolean
  switchTheme: (newValue: boolean) => void
  toggleExpandSidebar?: (expandSidebar?: boolean) => void
}

const initialState: AppState = {
  isSidebarExpanded: false,
  isOnline: true,
  isLightTheme: false,
  switchTheme: () => {},
}

export const AppContext = createContext<Partial<AppState>>(initialState)

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps): ReactElement => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false)
  const switchTheme = (newValue: boolean) => {
    setIsLightTheme(newValue)
  }

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
