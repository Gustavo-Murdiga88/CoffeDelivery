import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

  max-width: 90rem;

  margin: 0 auto;
  margin-bottom: 7rem;

  @media (max-width: 700px) {
    padding: 1.5rem;
  }
`;
