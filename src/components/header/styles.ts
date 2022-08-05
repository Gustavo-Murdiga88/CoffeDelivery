import styled from "styled-components";

const ButtonPattern = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  line-height: 1.3;
  font-size: 0.875rem;
  font-weight: 400;

  border: 0;
  border-radius: 6px;

  max-width: 9rem;
  height: 2.5rem;

  padding: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6.8rem;

  padding: 2rem 2rem;

  & aside {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  & img {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const ButtonLocation = styled(ButtonPattern)`
  background-color: ${({ theme }) => theme["purple-light"]};
  color: ${({ theme }) => theme["purple-dark"]};
`;

export const ButtonShopping = styled(ButtonPattern)`
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme["yellow-light"]};
  color: ${({ theme }) => theme["yellow-dark"]};
  min-width: 2.5rem;
  min-height: 2.5rem;

  &:disabled {
    filter: brightness(0.9);
    cursor: not-allowed;
  }
`;

type TagProps = {
  isHidden: boolean;
};
export const Tag = styled.span<TagProps>`
  position: absolute;
  top: -6px;
  right: -6px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme["yellow-dark"]};
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;

  max-width: ${({ isHidden }) => (isHidden ? "0" : "none")};
  opacity: ${({ isHidden }) => (isHidden ? "0" : "1")};

  font-weight: bold;
`;
