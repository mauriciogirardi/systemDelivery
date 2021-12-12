import * as S from "./styles";

type StepsProps = {
  step: number;
  title: string;
};

export function Steps({ step, title }: StepsProps) {
  return (
    <S.Li>
      <p>
        <span>{step} </span>
        {title}
      </p>
    </S.Li>
  );
}
