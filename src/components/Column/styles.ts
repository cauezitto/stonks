import styled, { css } from 'styled-components'
import { ColumnProps } from '.'

export const Wrapper = styled.div<ColumnProps>`
  ${({ theme, alignItems = 'center', justifyContent, margin }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${alignItems};

    ${margin &&
    css`
      margin: ${margin};
    `}

    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  `}
`
