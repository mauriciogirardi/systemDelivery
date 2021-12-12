import styled from "styled-components";

export const Container = styled.div`
  background-color: #eeeef2;
  padding: 1rem;
  border-radius: 0.4rem;
  width: 280px;
  height: 420px;
  overflow: hidden;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  > div {
    background-color: #ccc;
    width: 100%;
    height: 130px;
    border-radius: 0.4rem;
  }

  > img {
    width: 100%;
    height: 130px;
    border-radius: 0.4rem;
    object-fit: cover;
  }

  h1 {
    font-size: 1.4rem;
    text-align: center;
    color: var(--orange);
  }

  h3 {
    color: var(--orange);
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1.1rem;
    color: var(--primary-secondary);
  }

  p {
    font-weight: 400;
    color: var(--primary-secondary);
  }
`;
