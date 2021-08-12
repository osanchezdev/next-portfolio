import styled from "styled-components"
import { device } from "../../../../../styles/mediaQueries"

export const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  & svg {
    margin: 0 10px;
    height: 20px;
    width: 20px;
    @media ${device.laptopL} {
      margin: 20px 10px;
      height: 30px;
      width: 30px;
    }
  }
`
