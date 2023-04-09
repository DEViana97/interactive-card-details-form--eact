import styled from "styled-components";

import bgDesktop from "../../assets/bg-main-desktop.png";
import bgMobile from "../../assets/bg-main-mobile.png";

export const Container = styled.main`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CardsContainer = styled.section`
  min-height: 100vh;
  width: 40%;
  background: url(${bgDesktop});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    min-height: 30vh;
    background-image: url(${bgMobile});
  }
`;

export const CardContainer = styled.div`
  @media screen and (max-width: 1023px) {
    img {
      width: 300px;
    }
  }
  @media screen and (max-width: 767px) {
    img {
      width: 280px;
    }
  }
`;

export const Cards = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  left: 100%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    left: 61%;
    top: 60%;
    gap: 0;
  }
`;

export const CardFront = styled.div`
  position: relative;
  transform: translateX(-70px);

  @media screen and (max-width: 1023px) {
    width: 300px;
  }

  @media screen and (max-width: 767px) {
    width: 300px;
    z-index: 100;
  }

  h1 {
    color: #fff;
    position: absolute;
    bottom: 5rem;
    left: 1rem;
    letter-spacing: 2px;

    @media screen and (max-width: 1023px) {
      font-size: 1.1rem;
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;

  @media screen and (max-width: 1023px) {
    width: 50px;
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  right: 3rem;
  display: flex;
  color: var(--White);
  justify-content: space-between;
`;

export const CardBack = styled.div`
  position: relative;

  @media screen and (max-width: 1023px) {
    width: 300px;
    img {
      width: 300px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    transform: translateY(70px);
    img {
      width: 280px;
    }
  }

  span {
    position: absolute;
    right: 3.5rem;
    top: 7rem;
    color: var(--Light-grayish-violet);

    @media screen and (max-width: 1023px) {
      top: 42%;
      right: 12%;
    }
  }
`;
