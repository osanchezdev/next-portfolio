import React, {
  createContext,
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";

type AppState = {
  isSidebarExpanded: boolean;
  isOnline: boolean;
  setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const initialState: AppState = {
  isSidebarExpanded: false,
  isOnline: true,
  setIsSidebarExpanded: () => {},
};

export const AppContext = createContext<AppState>(initialState);

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props): ReactElement => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const checkConnection = async () => {
    setIsOnline(window.navigator.onLine);
  };

  return (
    <AppContext.Provider
      value={{
        isOnline,
        isSidebarExpanded,
        setIsSidebarExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
