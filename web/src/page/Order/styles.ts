import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 940px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1rem;
`;
