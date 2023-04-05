import React, { useState } from "react";
import InputMask from "react-input-mask";

import {
  Form,
  InputDate,
  CvcInput,
  FormContainer,
  NameField,
  CardField,
  CardInformation,
  CardDate,
  InputContainer,
  CvcField,
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se os campos obrigatórios foram preenchidos
    if (!cardName || !cardNumber || !month || !year || !cardCvv) {
      setShowError(true);
      return;
    } else {
      setConfirmed(true);
      setShowError(false);
    }
  };

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
            style={{ borderColor: showError ? "#FF5252" : "" }}
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
            style={{ borderColor: showError ? "#FF5252" : "" }}
          />
          {showError && !cardNumber && (
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
                  style={{ borderColor: showError ? "#FF5252" : "" }}
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
                  style={{ borderColor: showError ? "#FF5252" : "" }}
                />
                {showError && !year && (
                  <span style={{ color: "red" }}>Preencha o ano</span>
                )}
              </div>
            </InputContainer>
          </CardDate>
          <CvcField>
            <label>CVC:</label>
            <CvcInput
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
              style={{ borderColor: showError ? "#FF5252" : "" }}
            />
            {showError && !cardCvv && (
              <span style={{ color: "red" }}>Preencha o número do cartão</span>
            )}
          </CvcField>
        </CardInformation>
        <SubmitButton type="submit" onClick={handleSubmit}>
          Submit
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}
