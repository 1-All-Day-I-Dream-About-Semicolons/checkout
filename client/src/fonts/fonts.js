import { createGlobalStyle } from 'styled-components';

import AdihausDIN from './AdihausDIN.woff';
import AdihausDIN2 from './AdihausDIN.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${AdihausDIN2}) format('woff2'),
        url(${AdihausDIN}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;