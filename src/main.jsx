import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from "@chakra-ui/react"
import store from './store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}> 
         <App />
      </Provider>
    </ChakraProvider> 
    </BrowserRouter>
)
