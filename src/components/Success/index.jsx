import React from "react";

import completeIcon from "../../assets/icon-complete.svg";
import { Container, ContinueButton } from "./styles";

export function Success({ handleReset }) {
  return (
    <>
      <Container>
        <img src={completeIcon} alt="" />
        <h2>OBRIGADO!</h2>
        <p>Adicionamos os detalhes do seu cartão.</p>
        <ContinueButton onClick={handleReset}>Continuar</ContinueButton>
      </Container>
    </>
  );
}
