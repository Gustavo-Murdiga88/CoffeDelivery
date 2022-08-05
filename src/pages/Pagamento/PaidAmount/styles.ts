import styled from "styled-components";

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleBanner = styled.header`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;

  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
`;

export const SelectedOrder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;

  & div img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  & div:nth-child(2) {
    display: flex;
    gap: 0.5rem;
  }

  & div:last-child {
    justify-self: flex-end;
    align-self: flex-start;
    flex: 1;
  }
  & div:last-child strong {
    display: block;
    text-align: right;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  & > div > .excluir {
    border: 0;
    background-color: ${({ theme }) => theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${({ theme }) => theme["base-text"]};
    line-height: 1.3;

    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  & > div > .excluir svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const CountButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;

  button {
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.purple};
    font-size: 1rem;
    padding: 0.5rem;

    border-radius: 4px;
  }

  span {
    background-color: transparent;
    color: ${({ theme }) => theme["base-title"]};
    font-size: 1.25rem;

    font-size: 0.875rem;
  }
`;

export const FooterOrder = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > button {
    margin-top: 1.5rem;
    border: 0;
    padding: 0.75rem;

    border-radius: 6px;
    background-color: ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &:disabled:hover {
      filter: none;
    }
  }
`;

type LineFooterProps = {
  isTotal?: boolean;
};

export const LineFooter = styled.div<LineFooterProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  line-height: 1.3;

  & strong,
  & span {
    color: ${({ isTotal, theme }) =>
      isTotal ? theme["base-subtitle"] : theme["base-text"]};
    font-size: ${({ isTotal }) => (isTotal ? `1rem` : `0.875rem`)};
    font-weight: ${({ isTotal }) => (isTotal ? "bold" : 400)};
  }
`;
