import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 111px;
    /* border: 1px red solid; */
    width: 100%;
    padding: 15px 0;

    .logo {
      width: 111px;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      height: 80px;
      .logo {
        width: 5 0px;
      }
    }
  `}
`
