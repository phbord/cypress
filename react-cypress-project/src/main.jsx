import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from './App'
import Home from './pages/Home'
import ModalPage from './pages/ModalPage'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='modal-page' element={<ModalPage />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
