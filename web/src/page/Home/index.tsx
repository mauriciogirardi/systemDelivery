import { Container } from "Ui";
import { Footer } from "components/Footer";
import BackgroundSVG from "assets/svgs/background.svg";
import * as S from "./styles";

export function Home() {
  return (
    <>
      <Container>
        <S.Wrapper>
          <S.Content>
            <h1>Faça seu pedido que entregamos para você!</h1>
            <p>Escolha o seu pedido em poucos minutos levamos na sua porta</p>

            <S.ButtonLink to="/order">FAZER PEDIDO</S.ButtonLink>
          </S.Content>

          <S.ContentBackground>
            <img src={BackgroundSVG} alt="Entregador" />
          </S.ContentBackground>
        </S.Wrapper>
      </Container>

      <Footer />
    </>
  );
}
