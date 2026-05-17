import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// កែបន្ទាត់ទី ៣ ក្នុង main.jsx ទៅជា៖
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import AOS from 'aos'          // ← បន្ថែម
import 'aos/dist/aos.css'   // ← បន្ថែម
import App from './App.jsx'
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
})

createRoot(document.getElementById('root')).render(
  
   <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>,

)
