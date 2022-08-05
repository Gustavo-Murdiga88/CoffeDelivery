import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 2.5rem;

  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
`;

export const TitleBanner = styled.header`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;

  color: ${({ theme }) => theme["base-subtitle"]};
`;

type DescriptionTitleProps = {
  isHidden: boolean;
};
export const DescriptionTitle = styled.div<DescriptionTitleProps>`
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
`;

type TitleProps = {
  isFooter?: boolean;
};
export const Title = styled.div<TitleProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;

  line-height: 1.3;

  margin-bottom: 2rem;

  & div:first-child {
    align-self: flex-start;
    color: ${({ theme }) => theme["yellow-dark"]};
    font-size: bold;
  }

  ${({ isFooter }) =>
    isFooter
      ? css`
          & > svg {
            color: ${({ theme }) => theme.purple};
            font-weight: bold;
          }
          & span p:first-child {
            line-height: 1.3;
            color: ${({ theme }) => theme["base-subtitle"]};
            font: 1rem;
          }
          & span span {
            line-height: 1.3;
          }
        `
      : null}
`;

export const FormInputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormPaidOptions = styled.div`
  padding: 2.5rem;

  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

type ButtonProps = {
  isSelected?: boolean;
};
export const Button = styled.button<ButtonProps>`
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme["base-text"]};

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme["purple-light"] : theme["base-button"]};
  border: 1px solid
    ${({ theme, isSelected }) => (isSelected ? theme.purple : "transparent")};
  border-radius: 6px;
  line-height: 1.3;

  width: 12rem;
  padding: 1rem;
  transition: filter 0.3s;

  & svg {
    color: ${({ theme }) => theme.purple};
    font-weight: bold;
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 700px) {
    width: 100%;
    gap: 1rem;
    align-items: center;
  }
`;

type InputPatternProps = {
  width?: number;
  flexShrink?: number;
  flexGrow?: string;
};

export const GroupInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Input = styled.input<InputPatternProps>`
  background-color: ${({ theme }) => theme["base-input"]};
  color: ${({ theme }) => theme["base-title"]};
  padding: 0.75rem;

  max-width: ${({ width }) => (width ? `${width / 16}rem` : "100%")};
  flex-shrink: ${({ flexShrink }) => flexShrink || "0"};
  flex-grow: ${({ flexGrow }) => flexGrow || "0"};

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme["base-button"]};

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme["yellow-dark"]};
  }

  @media (max-width: 700px) {
    min-width: 100%;
  }
`;
