import styled, { css } from "styled-components";

export const ContainerDelivery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem;
  @media (max-width: 700px) {
    padding: 0;
  }

  & > main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 7rem;

    & .containerInformation {
      padding: 2px;
      border-radius: 6px 36px 6px 36px;
      background-image: linear-gradient(white, white),
        linear-gradient(130deg, #dbac2c, #8047f8);
      background-clip: content-box, border-box;
    }

    & img {
      flex: 1;
      max-height: 16.875rem;
    }

    @media (max-width: 700px) {
      & {
        flex-direction: column;
      }
      & img {
        flex: 1;
        max-height: 16rem;
      }
    }
  }

  & > header {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 1.3;

    & > p {
      font-family: "Baloo 2", sans-serif;
      font-size: 2rem;
      color: ${({ theme }) => theme["yellow-dark"]};
      font-weight: 800;
    }
    @media (max-width: 700px) {
      margin-top: 2rem;
    }
  }
`;

const colors = {
  purple: "purple",
  yellow: "yellow",
  yellowDark: "yellow-dark",
} as const;

type IconProps = {
  type: keyof typeof colors;
};

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) => theme[colors[type]]}; ;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  width: 34rem;
  padding: 2.5rem;
  height: 16.875rem;

  @media (max-width: 700px) {
    width: auto;
  }

  & aside {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & p {
      font-weight: 400;
      line-height: 1.3;

      & strong {
        margin-left: 0.25rem;
      }
      & p {
        font-weight: 700;
      }
    }
  }
`;
