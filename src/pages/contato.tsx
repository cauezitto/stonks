import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import PaddingWrapper from 'components/PaddingWrapper'
import Row from 'components/Row'
import { FormWrapper, RedBox, Main } from 'styles/contato'

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
              <Heading role="h2" color="white100" textAlign="left">
                AGENDAR CONSULTORIA GRATUITA
              </Heading>
            </FormWrapper>
          </Row>
        </PaddingWrapper>
      </Main>
    </>
  )
}

export default Contato
