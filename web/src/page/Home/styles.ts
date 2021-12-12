import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.main`
  width: 500px;

  h1 {
    font-size: 4rem;
    line-height: 4.2rem;
    font-weight: 800;
  }

  p {
    font-size: 1.5rem;
    margin: 2rem 0;
    color: var(--primary-secondary);
  }

  @media (max-width: 1076px) {
    width: 100%;
  }
`;

export const ContentBackground = styled.main`
  width: 500px;

  @media (max-width: 1076px) {
    width: 0;
    > img {
      display: none;
    }
  }
`;

export const ButtonLink = styled(Link)`
  background-color: var(--orange);
  border-radius: 0.4rem;
  font-weight: 600;
  font-size: 1.2rem;
  transition: filter 0.2s;
  cursor: pointer;
  padding: 1.4rem 3rem;
  display: inline-block;
  margin-top: 1rem;

  :hover {
    filter: opacity(0.9);
  }
`;

export const FlexColum = styled.div`
  display: flex;
  flex-direction: column;
`;
