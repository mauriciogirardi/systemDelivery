import { Link } from "react-router-dom";
import { Container, Flex } from "Ui";
import logoSVG from "assets/svgs/logo.svg";
import * as S from "./styles";

export function NavBar() {
  return (
    <S.Nav>
      <Container>
        <Flex>
          <img src={logoSVG} alt="Logo Delivery" />
          <Link to="/" title="Voltar para a home.">
            Delivery
          </Link>
        </Flex>
      </Container>
    </S.Nav>
  );
}
