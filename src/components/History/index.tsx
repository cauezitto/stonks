import * as S from './styles'
import { useState } from 'react'

const History = () => {
  const [points, setPoints] = useState([true, false, false])

  return (
    <S.Wrapper>
      <S.Line>
        <S.Point
          selected={points[0]}
          onClick={() => setPoints([true, false, false])}
        >
          <img src="/img/rocket1.png" alt="foguete vermelho deitado" />
        </S.Point>
        <S.Point
          selected={points[1]}
          onClick={() => setPoints([false, true, false])}
        >
          <img src="/img/rocket2.png" alt="foguete vermelho decolando" />
        </S.Point>
        <S.Point
          selected={points[2]}
          onClick={() => setPoints([false, false, true])}
        >
          <img src="/img/rocket3.png" alt="foguete vermelho em orbita" />
        </S.Point>
      </S.Line>

      <S.Paragraph selected={points[0]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </S.Paragraph>

      <S.Paragraph selected={points[1]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        finibus dapibus nisi vitae sodales. Maecenas porttitor dui quis quam
        condimentum elementum. Duis non mi ac nisi tristique semper. Praesent
        orci turpis, vehicula sed dui et, varius facilisis metus. Nullam
        dapibus.
      </S.Paragraph>

      <S.Paragraph selected={points[2]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        tristique magna, ac imperdiet urna. Duis quis fringilla turpis. Nullam
        placerat a ligula et mollis. Mauris non lacus at erat auctor imperdiet
        ac vitae leo.
      </S.Paragraph>
    </S.Wrapper>
  )
}

export default History
