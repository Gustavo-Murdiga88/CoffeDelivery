import styled from "styled-components";

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

export const Title = styled.header`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;

  padding: 0 2rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding: 2rem;

  width: 19rem;
  height: 19.37rem;

  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme["base-card"]};

  & > img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -17%);
  }

  & > strong {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.25rem;

    color: ${({ theme }) => theme["base-subtitle"]};

    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  & > p {
    width: 100%;
    text-align: center;
    font-weight: 400;
    line-height: 1.3;

    color: ${({ theme }) => theme["base-label"]};
    font-size: 0.875rem;
  }
`;

export const FooterCard = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 2.37rem;
  width: 100%;

  & > div:nth-child(1),
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.3rem;
  }
  & > div:nth-child(1) {
    padding-top: 0.5rem;
  }
  & > div:nth-child(1) span {
    font-size: 0.625rem;
    line-height: 1.3;

    color: ${({ theme }) => theme["base-text"]};
  }

  & > div:nth-child(1) strong {
    font-size: 1.25rem;
    line-height: 0.8;

    font-weight: 700;
    font-family: "Baloo 2", sans-serif;
    color: ${({ theme }) => theme["base-text"]};
  }

  & > div:nth-child(2) div {
    padding: 0.5rem;
    width: 4.5rem;
    height: 2.38rem;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    border-radius: 6px;
    background-color: ${({ theme }) => theme["base-button"]};
  }

  & > div:nth-child(2) > button {
    border: 0;
    background-color: ${({ theme }) => theme.purple};
    border-radius: 6px;
    padding: 0.6rem;

    align-self: stretch;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.white};
    font-size: 1.25rem;

    font-size: 1rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Tag = styled.span`
  font-size: 0.625rem;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: ${({ theme }) => theme["yellow-dark"]};
  background-color: ${({ theme }) => theme["yellow-light"]};
  text-align: center;
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;

  border-radius: 999px;
`;

export const TagContainer = styled.div`
  margin-top: 5.3rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const CountButton = styled.div`
  button {
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.purple};
    font-size: 1rem;
    padding: 0.5rem;

    border-radius: 4px;
    &:hover {
      filter: brightness(0.8);
    }
  }

  span {
    background-color: transparent;
    color: ${({ theme }) => theme["base-title"]};
    font-size: 1.25rem;

    font-size: 0.875rem;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
