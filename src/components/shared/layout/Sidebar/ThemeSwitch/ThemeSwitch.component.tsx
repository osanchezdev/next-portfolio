'use client'
import { useContext, FC } from "react"
import Switch from "react-switch"
import { lighten } from "polished"
import { ThemeContext } from "styled-components"
import Icon from "../../../Icon/Icon.component"
import { AppContext } from "../../../../../context/appContext"
import { ThemeSwitchWrapper } from "./ThemeSwitch.styles"

const ThemeSwitch: FC = () => {
  const { isLightTheme, switchTheme } = useContext(AppContext)
  const themeContext = useContext(ThemeContext)
  const updateTheme = (newValue: boolean) => {
    switchTheme?.(newValue)
  }
  return (
    <ThemeSwitchWrapper>
      <Icon icon="FaMoon" />
      <Switch
        onChange={() => updateTheme(!isLightTheme)}
        checked={isLightTheme ?? false}
        onColor={lighten(0.3, themeContext?.colors.primary ?? '')}
        onHandleColor={themeContext?.colors.primary}
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
