import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <ChakraProvider bg='#3f4140'/>
     <App />
    <ChakraProvider/>
    
  </React.StrictMode>,
)
