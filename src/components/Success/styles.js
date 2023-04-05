import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    margin-top: 6rem;
  }

  h2 {
    letter-spacing: 3px;
  }
  p {
    font-size: 18px;
    color: var(--Dark-grayish-violet);
  }
`;

export const ContinueButton = styled.button`
  grid-column: 2 span;
  font-size: 18px;
  height: 50px;
  color: var(--White);
  border-radius: 6px;
  background: var(--Very-dark-violet);
  cursor: pointer;
  width: 350px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
