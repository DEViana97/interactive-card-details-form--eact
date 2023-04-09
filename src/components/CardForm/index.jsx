import React, { useState } from "react";
import InputMask from "react-input-mask";

import {
  Form,
  InputDate,
  CvvInput,
  FormContainer,
  NameField,
  CardField,
  CardInformation,
  CardDate,
  InputContainer,
  CvvField,
  SubmitButton,
} from "./styles";

export function CardForm({
  cardNumber,
  cardName,
  month,
  year,
  cardCvv,
  setCardNumber,
  setMonth,
  setYear,
  setCardCvv,
  setCardName,
  setConfirmed,
}) {
  const [showError, setShowError] = useState(false);
  const [showCardNumberError, setShowCardNumberError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !cardName ||
      !cardNumber ||
      !month ||
      !year ||
      !cardCvv ||
      cardNumber.length !== 19
    ) {
      setShowError(true);
      setShowCardNumberError(cardNumber.length !== 19);
      return;
    } else {
      setConfirmed(true);
      setShowError(false);
      setShowCardNumberError(false);
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <NameField>
          <label>Nome do titular:</label>
          <input
            type="text"
            value={cardName}
            placeholder="Ex: João da Silva"
            onChange={(e) => setCardName(e.target.value)}
            style={{
              borderColor: showError && cardName === "" ? "#FF5252" : "",
            }}
          />
          {showError && !cardName && (
            <span style={{ color: "red" }}>Preencha o nome do titular</span>
          )}
        </NameField>
        <CardField>
          <label>Número do cartão:</label>
          <InputMask
            mask="9999 9999 9999 9999"
            maskChar={null}
            value={cardNumber}
            onChange={(event) =>
              setCardNumber(event.target.value.replace(/\s/g, " "))
            }
            placeholder="Ex: 0000 0000 0000 0000"
            onBlur={() => {}}
            required
            style={{
              borderColor:
                (showError && cardNumber === "") ||
                (showCardNumberError && cardNumber.length !== 16)
                  ? "#FF5252"
                  : "",
            }}
          />
          {showError && (!cardNumber || cardNumber.length !== 19) && (
            <span style={{ color: "red" }}>Preencha o número do cartão</span>
          )}
        </CardField>

        <CardInformation className="card-information">
          <CardDate id="card-date">
            <label htmlFor="card-date">Data de expiração:</label>
            <InputContainer className="two-input">
              <div>
                <InputDate
                  type="text"
                  maxLength={2}
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder="MM"
                  onKeyDown={(e) => {
                    if (isNaN(parseInt(e.key)) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                  required
                  style={{
                    borderColor: showError && month === "" ? "#FF5252" : "",
                  }}
                />
                {showError && !month && (
                  <span style={{ color: "red" }}>Preencha o mês</span>
                )}
              </div>
              <div>
                <InputDate
                  type="text"
                  maxLength={2}
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  placeholder="YY"
                  onKeyDown={(e) => {
                    if (isNaN(parseInt(e.key)) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                  required
                  style={{
                    borderColor: showError && year === "" ? "#FF5252" : "",
                  }}
                />
                {showError && !year && (
                  <span style={{ color: "red" }}>Preencha o ano</span>
                )}
              </div>
            </InputContainer>
          </CardDate>
          <CvvField>
            <label>CVV:</label>
            <CvvInput
              type="text"
              pattern="[0-9]*"
              maxLength="3"
              value={cardCvv}
              onChange={(e) => setCardCvv(e.target.value)}
              placeholder="Ex: 123"
              onKeyDown={(e) => {
                if (isNaN(parseInt(e.key)) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
              required
              style={{
                borderColor: showError && cardCvv === "" ? "#FF5252" : "",
              }}
            />
            {showError && !cardCvv && (
              <span style={{ color: "red" }}>Preencha o CVV</span>
            )}
          </CvvField>
        </CardInformation>
        <SubmitButton type="submit" onClick={handleSubmit}>
          Cadastrar
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}
