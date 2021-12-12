import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--secondary);
  height: 3.5rem;
  border-top: 1px solid var(--border);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-weight: 400;
    color: var(--primary-secondary);
  }
`;

export const ContentLinks = styled.div`
  font-size: 1.5rem;
  width: 6rem;
  color: var(--orange);

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    transition: filter 0.2s;

    :hover {
      filter: opacity(0.8);
    }
  }
`;
