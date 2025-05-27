import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import { CartContext, DataContext, DefaultData } from './DataContext.jsx';
import App from './App.jsx'
import { useState } from 'react'

createRoot(document.getElementById('root')).render(
  <DataContext.Provider value={DefaultData}>
    <BrowserRouter>
        <App />
    </BrowserRouter> 
  </DataContext.Provider>
)
