import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  width: 350px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);

  @media screen and (max-width: 767px) {
    margin-top: 6rem;
  }

  label {
    color: var(--Very-dark-violet);
    margin-bottom: 0.3rem;
    text-transform: uppercase;
  }

  input {
    padding: 0.5rem;
    font-size: 18px;
    border: 1px solid var(--Dark-grayish-violet);
    border-radius: 6px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      font-family: inherit;
      color: var(--Dark-grayish-violet);
    }
    &:focus {
      outline-color: #6347ff;
    }
  }
`;

export const NameField = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 span;
`;

export const CardField = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 span;
`;

export const CardInformation = styled.div`
  display: flex;
  grid-column: 2 span;
  gap: 1rem;
`;

export const CardDate = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 span;
`;

export const CvvField = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 span;
`;

export const InputContainer = styled.div`
  display: flex;
  div {
    flex-direction: column;
  }
`;

export const InputDate = styled.input`
  width: 80px;
  margin-inline: 0.5rem;
  margin-left: 0;
`;

export const CvvInput = styled.input`
  width: 100%;
`;

export const SubmitButton = styled.button`
  grid-column: 2 span;
  font-size: 18px;
  height: 50px;
  color: var(--White);
  border-radius: 6px;
  background: var(--Very-dark-violet);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
