import styled from "styled-components";

interface DivProps {
  align?: string;
}

export const Div = styled.div<DivProps>`
  max-width: 1250px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: ${(props) => props.align};
`;
