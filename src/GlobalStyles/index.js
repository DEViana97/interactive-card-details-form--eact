import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --Red: rgb(255, 82, 82);
  --White: rgb(255, 255, 255);
  --Light-grayish-violet: rgb(222, 221, 223);
  --Dark-grayish-violet: rgb(142, 133, 147);
  --Very-dark-violet: rgb(33, 9, 47);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Space Grotesk', sans-serif;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  body {
    font-size: 18px;
  }
`;
