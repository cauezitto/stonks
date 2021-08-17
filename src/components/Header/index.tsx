import * as S from './styles'
import Image from 'next/image'
import PaddingWrapper from 'components/PaddingWrapper'

const Header = () => (
  <S.Wrapper>
    <PaddingWrapper>
      <Image src="/img/logo.png" width={111} height={130} />
    </PaddingWrapper>
  </S.Wrapper>
)

export default Header
