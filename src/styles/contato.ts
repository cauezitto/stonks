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
    width: 430px;
    min-height: 450px;
    border-radius: 10px;
    padding: ${theme.spacings.medium};
    animation-duration: 1.48s;
    animation-name: formAnimation;
    animation-iteration-count: 1;

    @keyframes formAnimation {
      0% {
        margin-right: -150px;
      }
      5% {
        margin-right: -150px;
      }
      100% {
        margin-right: 0;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 100%;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background: none;
    border: 0;
    border-bottom: 2px solid ${theme.colors.primaryRed};
    width: 80%;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semiBold};
  `}
`

export const TextBox = styled.textarea`
  ${({ theme }) => css`
    background: none;
    border: 0;
    border-bottom: 2px solid ${theme.colors.primaryRed};
    width: 80%;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semiBold};
    font-family: ${theme.font.family.roboto};
    outline: none;
  `}
`
