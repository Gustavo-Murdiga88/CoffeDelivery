import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 9rem);
  width: auto;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
