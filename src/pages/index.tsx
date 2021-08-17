import Button from 'components/Button'
import Column from 'components/Column'
import Header from 'components/Header'
import Heading from 'components/Heading'
import PaddingWrapper from 'components/PaddingWrapper'
import Paragraph from 'components/Paragraph'
import Row from 'components/Row'
import { VerticalPaddingWrapper } from 'components/VerticalPaddingWrapper/styles'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <img
          style={{ position: 'absolute', right: 0, width: '55%' }}
          src="/img/redBall.png"
          alt="bola vermelha com anéis vermelhos em volta"
        />
        <VerticalPaddingWrapper padding="xxxlarge">
          <VerticalPaddingWrapper padding="xxxlarge">
            <section style={{ position: 'relative' }}>
              <PaddingWrapper>
                <Row justifyContent="space-between">
                  <Column alignItems="flex-start">
                    <Heading
                      fontSize="xxxmax"
                      textAlign="left"
                      justify="flex-start"
                    >
                      CONSTRUA SUA <br /> PRESENÇA ONLINE!
                    </Heading>
                    <Paragraph fontSize="xxxlarge">
                      Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                      elit. Ut <br /> pretium rutrum odio ac lacinia.
                    </Paragraph>
                    <br />
                    <br />
                    <Button>SER DIGITAL</Button>
                  </Column>

                  <img
                    src="/img/MNP.png"
                    alt="site desenvolvido para a empresa mas nem peixe"
                  />
                </Row>
              </PaddingWrapper>
            </section>
          </VerticalPaddingWrapper>
        </VerticalPaddingWrapper>
      </main>
    </>
  )
}
