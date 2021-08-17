import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({
    theme,
    fill = 'primaryRed',
    color = 'white100',
    radius = 7,
    font = 'roboto',
    outline,
    fontSize = 'xlarge',
    fontWeight
  }) => css`
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    background-color: ${theme.colors[fill]};
    color: ${theme.colors[color]};
    /* font-weight: ${theme.font.bold}; */
    border-radius: ${radius};
    font-family: ${theme.font.family[font]};
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 4.65163px 4.65163px rgba(0, 0, 0, 0.25),
      5.81454px 11.6291px 11.6291px rgba(203, 79, 89, 0.78);

    ${radius &&
    css`
      border-radius: ${radius}px;
    `}

    ${fontWeight &&
    css`
      font-weight: ${theme.font[fontWeight]};
    `}
    ${fontSize &&
    css`
      font-size: ${theme.font.sizes[fontSize]};
    `}
    ${outline &&
    css`
      border: 2px black solid;
      background: transparent;
    `}
  `}
`
