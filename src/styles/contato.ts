import styled, { css } from 'styled-components'

export const RedBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryRed};
    width: 100%;
    height: 45vh;
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: -200px;
  `}
`

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    width: 450px;
    height: 500px;
    border-radius: 10px;
    padding: ${theme.spacings.medium};

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 100%;
    }
  `}
`
