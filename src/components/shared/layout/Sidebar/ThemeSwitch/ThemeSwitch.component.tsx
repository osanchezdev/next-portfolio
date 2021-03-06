import React, { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
import Switch from "react-switch"
import { ThemeSwitchWrapper } from "./ThemeSwitch.styles"
import { lighten } from "polished"
import { AppContext } from "../../../../../context/appContext"
import Icon from "../../../Icon/Icon.component"

const ThemeSwitch: React.FC = () => {
  const { switchTheme } = useContext(AppContext)
  const themeContext = useContext(ThemeContext)
  const [checked, setChecked] = useState(false)
  const updateTheme = (newValue: any) => {
    setChecked(newValue)
    switchTheme && switchTheme(newValue)
  }
  return (
    <ThemeSwitchWrapper>
      <Icon icon="FaMoon" />
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
      <Icon icon="FaSun" />
    </ThemeSwitchWrapper>
  )
}

export default ThemeSwitch
