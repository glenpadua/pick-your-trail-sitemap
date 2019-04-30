// Resets and FontFace

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, ul, ol, li, form, fieldset, legend
  {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1em;
    line-height: 1.5em;
    color: #2c2f42;
  }

  h1, h2, h3, h4, h5, h6, p { margin-top: 0; margin-bottom: 0; line-height: 1em }

  fieldset,img { border: 0; }

  legend { color: #000; }

  sup { vertical-align: text-top; }

  sub { vertical-align: text-bottom; }

  table
  {
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption, th, td
  {
    text-align: left;
    vertical-align: top;
    font-weight: normal;
  }

  input, textarea, select
  {
    font-size: 110%;
    line-height: 1.1;
  }

  abbr, acronym
  {
    border-bottom: .1em dotted;
    cursor: help;
  }

  a {
    color: #595c69;
    opacity: 0.8;
    text-decoration: none;
  }

  a:active, a:hover {
    color: #1cad45;
    text-decoration: none;
  }
`
export default GlobalStyle
