import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset-advanced";
import { color, typography } from "./styles";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}rem;
  font-weight: ${typography.weight.regular};
  background: #1e1e1e;
  color: ${color.lighter};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${color.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;

    color: ${color.secondary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;

    background: rgba(0, 0, 0, 0.05);
    color: ${color.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }

  small {
    font-size: 60%;
  }

  a {
    color: ${color.primary};
  }

  h1 {
    @media print {
      line-height: 1;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 0;

    @media print {
      font-size: 12px !important;
    }
  }

  ul {
    padding-left: 0;
    margin: 0 0 10px;
  }

  .show-print {
    display: none;

    @media print {
      display: block;
    }
  }

  .hidden-print-block {
    @media print {
      display: none !important;
    }
  }

  #root {
    display: grid;
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h2 {
      grid-column: span 12;
    }
  }

  dl {
    dt {
    }
    dd {
      margin: 0;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: 62.5%;
  }

  body {
    ${bodyStyles}
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
