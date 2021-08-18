import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryRed};
    box-shadow: 5px 5px 4px rgba(203, 79, 89, 0.3);
    width: 81px;
    height: 347px;
    z-index: -1;
    margin-left: -30px;
    margin-bottom: -315px;
  `}
`
