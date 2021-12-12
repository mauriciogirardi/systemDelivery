import { ReactNode } from 'react'
import * as S from './styles'

type ContainerProps = {
  children: ReactNode
}

export function Flex({ children }: ContainerProps) {
  return <S.Div>{children}</S.Div>
}
