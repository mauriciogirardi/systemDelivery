import * as S from "./styles";

type CardProductProps = {
  title: string;
  img: string;
  price: string;
  description: string;
};

export function CardProduct({
  description,
  img,
  price,
  title,
}: CardProductProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>{title}</h1>

        <img src={img} alt={title} />

        <h3>{price}</h3>

        <h4>Descrição</h4>
        <p>{description}</p>
      </S.Wrapper>
    </S.Container>
  );
}
