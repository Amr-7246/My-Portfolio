import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ContactPage from '../pages/Contact'
import Experines from '../pages/Experines'
const AppRoutes = () => {
  const routeList = [
  { path: '/', element: <Home /> },
  { path: '/experines', element: <Experines /> },
  { path: '/contact', element: <ContactPage /> },
]

  return (
    
    <Routes>
      {routeList.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default AppRoutes
