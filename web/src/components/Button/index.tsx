import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function Button({ name, ...rest }: ButtonProps) {
  return <S.Button {...rest}>{name}</S.Button>;
}
