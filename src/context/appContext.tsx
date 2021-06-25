import React, {
  createContext,
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";
import PropTypes from "prop-types";

type AppState = {
  isSidebarExpanded: boolean;
  isOnline: boolean;
  setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
};

const initialState: AppState = {
  isSidebarExpanded: true,
  isOnline: true,
  setIsSidebarExpanded: () => {},
};

export const AppContext = createContext<AppState>(initialState);

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props): ReactElement => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
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

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isOnline: PropTypes.bool.isRequired,
  isSidebarExpanded: PropTypes.bool.isRequired,
  setIsSidebarExpanded: PropTypes.func.isRequired,
};

export default AppProvider;
