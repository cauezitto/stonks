import * as S from './styles'

type WrapperProps = {
  children: React.ReactNode
}

const PaddingWrapper = (props: WrapperProps) => (
  <S.Wrapper>{props.children}</S.Wrapper>
)

export default PaddingWrapper
