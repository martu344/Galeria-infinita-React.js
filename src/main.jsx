import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useState } from 'react'


const Main = ()=>{
const[activado,setactivador]=useState(false)
const valoroverflow= activado?'hidden':'auto';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg:'#242424',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:valoroverflow
      }
    }
  }
});
return (

  <React.StrictMode>
     <ChakraProvider  theme={theme}>
    <App activado={activado} setactivador={setactivador} />
    </ChakraProvider>
</React.StrictMode>


)}
ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
