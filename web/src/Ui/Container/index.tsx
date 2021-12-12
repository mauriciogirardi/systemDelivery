import { ReactNode } from "react";
import * as S from "./styles";

type ContainerProps = {
  children: ReactNode;
  align?: "center" | "none";
};

export function Container({ children, align = "center" }: ContainerProps) {
  return <S.Div align={align}>{children}</S.Div>;
}
