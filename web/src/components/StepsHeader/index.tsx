import { Button } from "components/Button";
import { Steps } from "components/Steps";
import * as S from "./styles";

export function StepsHeader() {
  return (
    <S.Container>
      <S.Content>
        <S.Wrapper>
          <h1>SIGA AS ETAPAS</h1>

          <ul>
            <Steps step={1} title="Selecione os produtos e localização." />
            <Steps step={2} title="Depois clique em ENVIAR PEDIDO." />
          </ul>

          <Button name="ENVIAR PEDIDO" />
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
}
