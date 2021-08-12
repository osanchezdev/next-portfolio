import styled from "styled-components"

export const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth}px;
`
