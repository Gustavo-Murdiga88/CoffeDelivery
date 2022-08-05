import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 5rem 2rem;

  & div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 100%;
      height: 100%;
      padding: 1rem;
      padding-left: 2.5rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 2rem 0;

    & div {
      & img {
        padding: 1rem;
        padding-top: 4rem;
      }
    }
  }
`;

export const InformacoesBanner = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: 34rem;

  max-width: 37rem;

  & p:nth-child(1) {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    height: 10rem;
    color: ${({ theme }) => theme["base-title"]};
  }

  & p:nth-child(2) {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;

    margin-bottom: 4rem;

    color: ${({ theme }) => theme["base-subtitle"]};
  }

  @media (max-width: 700px) {
    & p:nth-child(1) {
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 1.7rem;
      line-height: 1.3;

      height: 6rem;
      color: ${({ theme }) => theme["base-title"]};
    }

    & p:nth-child(2) {
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 3rem;

      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }
`;

export const RodapeInformacoes = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    justify-content: flex-start;
    align-items: center;
    height: 2rem;
    line-height: 1.3;
    width: 50%;
    margin-bottom: 1.125rem;
  }

  & div:nth-child(3),
  & div:nth-child(4) {
    margin-bottom: 0;
  }

  & div:nth-child(1) span:first-child,
  & div:nth-child(2) span:first-child,
  & div:nth-child(3) span:first-child,
  & div:nth-child(4) span:first-child {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.white};
  }
  & div:nth-child(1) span:first-child {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }

  & div:nth-child(2) span:first-child {
    background-color: ${({ theme }) => theme["base-text"]};
  }

  & div:nth-child(3) span:first-child {
    background-color: ${({ theme }) => theme.yellow};
  }
  & div:nth-child(4) span:first-child {
    background-color: ${({ theme }) => theme.purple};
  }

  @media (max-width: 700px) {
    gap: 1rem;
    align-items: center;
    justify-content: center;

    & div {
      width: 100%;
    }

    & div:nth-child(2),
    & div:nth-child(1) {
      margin-bottom: 0;
    }
  }
`;
