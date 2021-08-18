import styled, { css } from 'styled-components'

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    '. . skill1'
    '. skill2 .'
    'skill3 . .';

  .skill1 {
    grid-area: skill1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill2 {
    grid-area: skill2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill3 {
    grid-area: skill3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

type SkillWrapperProps = {
  img: string
}

export const SkillWrapper = styled.div<SkillWrapperProps>`
  ${({ theme, img }) => css`
    width: 85%;
    height: 408px;
    background-image: url(${`img/${img}`});
    background-size: cover;
    /* background-position: center; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${theme.spacings.xsmall};

    .ret {
      width: 104%;
      height: 45px;
      margin-top: -12px;
      margin-left: -7%;
      background: #e60c27;
      box-shadow: 6.86732px 6.86732px 5.49386px rgba(230, 12, 39, 0.3);
    }
  `}
`
