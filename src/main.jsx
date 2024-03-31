import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Brief from './Brief.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/> 
      <Route path='/Brief' element={<Brief />}/>
      <Route path='/App' element={<App />}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
