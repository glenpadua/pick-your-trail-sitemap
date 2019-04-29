// Resets and FontFace

import { createGlobalStyle } from 'styled-components'
// import Barlow from './fonts/Barlow-Regular.ttf'
// import BarlowSemiBold from './fonts/Barlow-SemiBold.ttf'
// import BarlowExtraBold from './fonts/Barlow-ExtraBold.ttf'

const GlobalStyle = createGlobalStyle`
  ${'' /* @font-face {
    font-family: 'Barlow';
    src: url('${Barlow}') format('truetype');
  }

  @font-face {
    font-family: 'BarlowSemiBold';
    src: url('${BarlowSemiBold}') format('truetype');
  }

  @font-face {
    font-family: 'BarlowExtraBold';
    src: url('${BarlowExtraBold}') format('truetype');
  } */}

  html, ul, ol, li, form, fieldset, legend
  {
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

  a:active {
    color: #e11d1a;
  }

`
export default GlobalStyle
