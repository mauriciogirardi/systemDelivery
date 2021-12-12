import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--orange);
  border: 0;
  width: 12rem;
  height: 3rem;
  border-radius: 0.4rem;
  font-weight: 600;
  font-size: 1.1rem;
  transition: filter 0.2s;

  :hover {
    filter: opacity(0.9);
  }
`;
