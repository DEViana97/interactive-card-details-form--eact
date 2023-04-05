import React, { useState } from "react";
import { CardForm } from "../CardForm";
import {
  CardsContainer,
  Container,
  CardFront,
  CardBack,
  Cards,
  CardContainer,
  CardInfo,
  Logo,
} from "./styles";

import logoIcon from "../../assets/card-logo.svg";
import frontCardBg from "../../assets/bg-card-front.png";
import backCardBg from "../../assets/bg-card-back.png";
import { Success } from "../Success";

export function Home() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function handleReset() {
    setCardNumber("");
    setCardName("");
    setMonth("");
    setYear("");
    setCardCvv("");
    setConfirmed(false);
  }

  return (
    <Container>
      <CardsContainer>
        <Cards>
          <CardFront>
            <Logo src={logoIcon} alt="Logo do cartão de crédito" />
            <CardContainer>
              <img src={frontCardBg} alt="Parte da frente do cartão" />
              <h1>{cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}</h1>
              <CardInfo>
                <span>{cardName}</span>
                <span>
                  {month === "" && year === "" ? "" : `${month}/${year}`}
                </span>
              </CardInfo>
            </CardContainer>
          </CardFront>
          <CardBack>
            <img src={backCardBg} alt="Parte traseira do cartão" />
            <span>{cardCvv}</span>
          </CardBack>
        </Cards>
      </CardsContainer>
      {!confirmed && (
        <CardForm
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardName={cardName}
          setCardName={setCardName}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cardCvv={cardCvv}
          setCardCvv={setCardCvv}
          setConfirmed={setConfirmed}
        />
      )}
      {confirmed && <Success handleReset={handleReset} />}
    </Container>
  );
}
