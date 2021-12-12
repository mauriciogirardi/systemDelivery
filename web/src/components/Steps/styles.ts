import styled from "styled-components";

export const Li = styled.li`
  span {
    color: var(--orange);
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--primary-secondary);
  }

  & + li {
    margin-top: 0.5rem;
  }
`;
