import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 350px;
    width: 100%;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.large};
    border-radius: 5px;
  `}
`

export const Photo = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-image: url('/img/silvio.jpg');
  background-size: cover;
  background-position: center;
`
