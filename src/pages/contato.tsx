import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import PaddingWrapper from 'components/PaddingWrapper'
import Row from 'components/Row'
import { FormWrapper, RedBox, Main, Input, TextBox } from 'styles/contato'
import Button from 'components/Button'

const Contato = () => {
  return (
    <>
      <RedBox />
      <Main>
        <PaddingWrapper>
          <Row alignItems="flex-start">
            <div className="desktop-contact-header">
              <Heading
                textAlign="left"
                fontWeight="bold"
                fontSize="xmax"
                font="robotoCondensed"
              >
                DEIXE SUA MENSAGEM <br /> E TE RESPONDEREMOS <br />
                EM BREVE
              </Heading>
            </div>
            <FormWrapper>
              <Heading
                role="h2"
                color="white100"
                textAlign="left"
                margin="0 0 30px 0"
              >
                GARANTA SUA <br /> CONSULTORIA GRATUITA
              </Heading>
              <Input placeholder="Nome" /> <br /> <br /> <br />
              <Input placeholder="Celular" /> <br /> <br /> <br />
              <TextBox placeholder="Quer falar mais sobre você?" /> <br />{' '}
              <br /> <br />
              <Button>ENVIAR</Button>
            </FormWrapper>
          </Row>
        </PaddingWrapper>
      </Main>
    </>
  )
}

export default Contato
