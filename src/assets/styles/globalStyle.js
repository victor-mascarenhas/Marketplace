import { createGlobalStyle } from 'styled-components'
import 'sweetalert2/src/sweetalert2.scss'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    -webkit-font-smoothing: antialiased; 
       
}

body {
    font-family: 'Roboto', sans-serif;
}
`


export default GlobalStyle