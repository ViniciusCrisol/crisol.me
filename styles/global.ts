import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin : 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  transition: ease;
}

*:focus{
  outline: 0;
}

html, body , #root{
  min-height: 100%;
  width: 100%;
}

body{
  background-color: var(--background);
  -webkit-font-smoothing: antialiased !important;
}

body,input, button{
  font-size: 16px;
  color: var(--text);
  font-family: --apple-system, sans-serif;
}

a{
  text-decoration: none;
  color: var(--text)
}

:root{
  --gray: #868499;
  --text: #363355;
  --main: #666ee8;
  --background: #f7f8f9;
  --main-opacity: #666ee899;
}
`;
