import styled from "styled-components";

export const Container = styled.div`
  background-color: #eeeef2;
`;

export const Content = styled.header`
  padding: 1.6rem 1rem;
  max-width: 1250px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    color: var(--orange);
    font-weight: 600;
    font-size: 1.6rem;
    width: 100px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    h1 {
      margin-bottom: 1rem;
      width: 180px;
    }

    > button {
      margin-top: 2rem;
    }
  }
`;
