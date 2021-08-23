import Column from 'components/Column'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Row from 'components/Row'
import * as S from './styles'
import { IoStarSharp } from 'react-icons/io5'

const Customer = () => (
  <S.Wrapper>
    <Row justifyContent="flex-start" alignItems="center">
      <S.Photo />{' '}
      <Column
        justifyContent="flex-start"
        alignItems="flex-start"
        margin="0 0 0 20px"
      >
        <Heading
          role="h3"
          fontSize="max"
          fontWeight="normal"
          font="roboto"
          margin="0 0 3px 0"
        >
          Silvio Santos
        </Heading>
        <Heading
          role="h4"
          textAlign="right"
          justify="flex-start"
          fontWeight="normal"
          fontSize="xlarge"
          color="gray100"
        >
          SBT - PROPIETÁRIO
        </Heading>
      </Column>
    </Row>
    <br />
    <Paragraph fontSize="xxlarge">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum
      tellus ac tempus aliquet. Sed lacinia mauris at rhoncus semper.
    </Paragraph>
    <br />
    <Row justifyContent="flex-start">
      <IoStarSharp size={35} color="#F7E432" />
      &nbsp; &nbsp;
      <IoStarSharp size={35} color="#F7E432" />
      &nbsp; &nbsp;
      <IoStarSharp size={35} color="#F7E432" />
      &nbsp; &nbsp;
      <IoStarSharp size={35} color="#F7E432" />
      &nbsp; &nbsp;
      <IoStarSharp size={35} color="#d2d2d2" />
    </Row>
  </S.Wrapper>
)

export default Customer
