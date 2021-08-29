import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

interface StyleHeadingProps extends HeadingProps {
  theme: DefaultTheme
}

const style = ({
  theme,
  font = 'roboto',
  fontSize,
  color = 'white100',
  textAlign = 'center',
  justify = 'center',
  margin,
  strongColor,
  fontWeight = 'semiBold',
  responsive
}: StyleHeadingProps) => css`
  color: ${theme.colors[color]};
  font-family: ${theme.font.family[font]};
  position: relative;
  justify-content: ${justify};
  text-align: ${textAlign};
  font-weight: ${theme.font[fontWeight]};
  position: relative;

  ${responsive &&
  css`
    @media (max-width: ${theme.breakPoints.tablet}) {
      /* text-align: center; */
      justify-content: center;
    }
  `}
  ${margin &&
  css`
    margin: ${margin};
  `}
  strong,
  b {
    ${strongColor &&
    css`
      color: ${theme.colors[strongColor]};
    `}
  }
  ${fontSize &&
  css`
    font-size: ${theme.font.sizes[fontSize]};
  `}
`

export const Heading1 = styled.h1<HeadingProps>`
  ${(props) => style(props)}
`
export const Heading2 = styled.h2<HeadingProps>`
  ${(props) => style(props)}
`
export const Heading3 = styled.h3<HeadingProps>`
  ${(props) => style(props)}
`
export const Heading4 = styled.h4<HeadingProps>`
  ${(props) => style(props)}
`
