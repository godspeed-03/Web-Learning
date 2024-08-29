import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider } from './Context/Context.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/Sotre.js'

ReactDOM.createRoot(document.getElementById('root')).render(

<>
{/* <ThemeProvider>
  <App />
</ThemeProvider> */}


<Provider store={store}>
  <App />
  </Provider>
</>



  
   
  
)
