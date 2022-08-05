import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 51rem 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
