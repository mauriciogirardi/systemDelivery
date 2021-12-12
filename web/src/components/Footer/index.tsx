import { Container } from "Ui";
import * as S from "./styles";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <p>Sistema de delivery</p>
          <S.ContentLinks>
            <FiFacebook />
            <FiLinkedin />
            <FiYoutube />
          </S.ContentLinks>
        </S.Wrapper>
      </Container>
    </S.Footer>
  );
}
