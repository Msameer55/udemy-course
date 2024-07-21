import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './screens/Homepage'
import Layout from './components/Layout'
import ProductDetail from './screens/ProductDetail'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path='product/:id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App