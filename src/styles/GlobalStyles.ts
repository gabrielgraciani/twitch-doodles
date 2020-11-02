import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  html, body, #root {
    height: 100%;
    background: #F9F9F9;
    color: #333;
  }

  #root{
    display:flex;
    flex-direction:column;
    width:100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor:pointer;
    border:0;
    outline:0;
    background:transparent;
  }

`;
