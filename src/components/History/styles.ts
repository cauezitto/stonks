import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 250px;
    margin-top: 30rem;

    @media (max-width: ${theme.breakPoints.mobileL}) {
      margin-top: 18rem;
    }
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.primaryRed};
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`

type PointProps = {
  selected?: boolean
}

export const Point = styled.div<PointProps>`
  ${({ theme, selected }) => css`
    width: 15px;
    height: 15px;
    background-color: ${theme.colors.primaryRed};
    border-radius: 50%;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    .rocket {
      margin-top: -35rem;
    }

    &::after {
      content: '';
      white-space: nowrap;
      position: absolute;
      margin-bottom: -3rem;
      display: flex;
      font-size: ${theme.font.sizes.small};
      /* height: 20px; */
      /* width: 100%; */
      /* border: 1px solid; */
    }

    ${!selected &&
    css`
      .rocket {
        visibility: hidden;
      }

      &::after {
        content: '(clique aqui)';
        color: ${theme.colors.white100};
      }
    `}

    @media (max-width: ${theme.breakPoints.mobileL}) {
      &::after {
        font-size: ${theme.font.sizes.xsmall};
      }
      .rocket {
        max-width: 150px;
        max-height: 180px;
        margin-top: -24rem;
      }
    }
  `}
`

export const Paragraph = styled.p<PointProps>`
  ${({ theme, selected }) => css`
    margin: ${theme.spacings.xxxgiant} 0;
    text-align: center;
    color: ${theme.colors.white100};

    ${!selected &&
    css`
      display: none;
    `}
  `}
`
