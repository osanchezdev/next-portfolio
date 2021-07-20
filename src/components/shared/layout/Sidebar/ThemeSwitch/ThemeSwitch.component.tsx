import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeSwitchWrapper } from "./ThemeSwitch.styles";
import { lighten } from "polished";

type ThemeSwitchProps = {
  switchTheme: any;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ switchTheme }) => {
  const themeContext = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const updateTheme = (newValue: any) => {
    setChecked(newValue);
    // Call upper switchTheme from indexPage
    switchTheme(newValue);
  };
  return (
    <ThemeSwitchWrapper>
      <FaMoon />
      <Switch
        onChange={updateTheme}
        checked={checked}
        onColor={lighten(0.3, themeContext.colors.primary)}
        onHandleColor={themeContext.colors.primary}
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
      <FaSun />
    </ThemeSwitchWrapper>
  );
};

export default ThemeSwitch;
