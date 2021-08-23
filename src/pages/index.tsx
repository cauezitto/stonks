import Button from 'components/Button'
import Column from 'components/Column'
import Customer from 'components/Customer'
import Header from 'components/Header'
import Heading from 'components/Heading'
import PaddingWrapper from 'components/PaddingWrapper'
import Paragraph from 'components/Paragraph'
import Retangle from 'components/Retangle'
import Row from 'components/Row'
import { VerticalPaddingWrapper } from 'components/VerticalPaddingWrapper/styles'
import { GridWrapper, SkillWrapper, CustomersWrapper } from 'styles/home'
import History from 'components/History'
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

        <VerticalPaddingWrapper padding="small">
          <section style={{ position: 'relative' }}>
            <PaddingWrapper>
              <Row justifyContent="space-between">
                <Column alignItems="flex-start">
                  <Heading
                    fontSize="xxxlarge"
                    textAlign="left"
                    justify="flex-start"
                    role="h2"
                    margin="0 0 0 30px"
                  >
                    <Retangle />
                    TUDO OQUE VOCÊ <br /> PRECISA PARA VENDER NA <br /> INTERNET
                  </Heading>
                  <Paragraph fontSize="xxxlarge" margin="0 0 0 115px">
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit. <br /> Vestibulum cursus
                    diam ut mattis <br /> ultrices. Vestibulum at mattis nulla.{' '}
                    <br /> ultrices. Vestibulum
                    <br />
                    <br />
                    <Button>AGENDAR</Button>
                  </Paragraph>
                </Column>
              </Row>
            </PaddingWrapper>
          </section>
          <br />
          <br />
          <br />
          <PaddingWrapper>
            <section style={{ position: 'relative', width: '100%' }}>
              <GridWrapper>
                <div className="skill1">
                  <SkillWrapper img="laptop.png">
                    <Heading
                      role="h3"
                      textAlign="left"
                      fontSize="xxxlarge"
                      margin=" 0 0 20px 0"
                    >
                      Sites e Ecommerces
                      <div className="ret" />
                    </Heading>

                    <Paragraph margin="0 0 25px 0">
                      Quisque non felis ac lorem malesuada bibendum. Curabitur
                      vulputate, lorem ac mattis euismod, arcu erat.
                    </Paragraph>
                  </SkillWrapper>
                </div>

                <div className="skill2">
                  <SkillWrapper img="phone.png">
                    <Heading
                      role="h3"
                      textAlign="left"
                      fontSize="xxxlarge"
                      margin=" 0 0 20px 0"
                    >
                      Social Media
                      <div className="ret" />
                    </Heading>

                    <Paragraph margin="0 0 25px 0">
                      Quisque non felis ac lorem malesuada bibendum. Curabitur
                      vulputate, lorem ac mattis euismod, arcu erat.
                    </Paragraph>
                  </SkillWrapper>
                </div>

                <div className="skill3">
                  <SkillWrapper img="desktop.png">
                    <Heading
                      role="h3"
                      textAlign="left"
                      fontSize="xxxlarge"
                      margin=" 0 0 20px 0"
                    >
                      SEO e Tráfego Pago
                      <div className="ret" />
                    </Heading>

                    <Paragraph margin="0 0 25px 0">
                      Quisque non felis ac lorem malesuada bibendum. Curabitur
                      vulputate, lorem ac mattis euismod, arcu erat.
                    </Paragraph>
                  </SkillWrapper>
                </div>
              </GridWrapper>
            </section>
          </PaddingWrapper>
        </VerticalPaddingWrapper>

        <VerticalPaddingWrapper padding="xxxlarge">
          <img
            style={{ position: 'absolute', left: 0, width: '45%', zIndex: -1 }}
            src="/img/redBall2.png"
            alt="bola vermelha com anéis vermelhos em volta"
          />
          <section style={{ width: '100%' }}>
            <Heading role="h2" fontSize="max" margin="0 0 80px 0">
              OQUE DIZEM OS NOSSOS <br />
              CLIENTES?
            </Heading>

            <PaddingWrapper>
              <CustomersWrapper>
                <Customer />
                <Customer />
                <Customer />
                <Customer />
              </CustomersWrapper>
            </PaddingWrapper>
          </section>
        </VerticalPaddingWrapper>

        <VerticalPaddingWrapper padding="xxxlarge">
          <section style={{ width: '100%' }}>
            <Heading role="h2" fontSize="max" margin="0 0 300px 0">
              CONHEÇA NOSSA <br />
              HISTÓRIA
            </Heading>

            <PaddingWrapper>
              <History />
            </PaddingWrapper>
          </section>
        </VerticalPaddingWrapper>

        <VerticalPaddingWrapper padding="xxxlarge">
          <section style={{ width: '100%' }}>
            <Heading role="h2" fontSize="xxxmax" margin="0 0 100px 0">
              EAÍ, BORA DECOLAR?
            </Heading>

            <Row justifyContent="center">
              <Button>SÓ SE FOR AGORA!</Button>
            </Row>
          </section>
        </VerticalPaddingWrapper>
      </main>
    </>
  )
}
