import * as S from './styles'
import Image from 'next/image'
import PaddingWrapper from 'components/PaddingWrapper'

const Header = () => (
  <S.Wrapper>
    <PaddingWrapper>
      <img src="/img/logo.png" className="logo" alt="logo stonks" />
    </PaddingWrapper>
  </S.Wrapper>
)

export default Header
