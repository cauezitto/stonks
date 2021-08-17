import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 8%;
    @media (min-width: 1600px) {
      padding: 0 20%;
    }
  `}
`
