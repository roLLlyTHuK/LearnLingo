import { createGlobalStyle } from 'styled-components';

import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoRegular from './fonts/Roboto-Regular.ttf';

const GlobalStyles = createGlobalStyle`
:root {
  --primary-text-color: #121417;
  --secondary-text-color: #757575;
  --subtitle-text-color: #8a8a89;
  --bg-color: #f8f8f8;
  --btn-color: #f4c550;
  --btn-hover-color: #ffdc86;
  --bg-secondary-color: #fbe9ba;
}

::-webkit-scrollbar-thumb {
  background-color: var(--btn-color);
  border-radius: 8px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: var(--bg-secondary-color);
}

@font-face {
  font-family: 'Roboto-Bold';
  font-weight: 700;
  font-style: normal;
  src: url(${RobotoBold}) format('truetype');
}
@font-face {
  font-family: 'Roboto-Medium';
  font-weight: 600;
  font-style: normal;
  src: url(${RobotoMedium}) format('truetype');
}
@font-face {
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-style: normal;
  src: url(${RobotoRegular}) format('truetype');
}

body {
  background-color: var(--bg-color);
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: 'Roboto-Regular', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--primary-text-color);
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}
`;

export default GlobalStyles;
