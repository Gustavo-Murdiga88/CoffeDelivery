import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 51rem 1fr;
  gap: 2rem;
  padding: 2rem;
  height: calc(100vh - 9rem);
  width: auto;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
