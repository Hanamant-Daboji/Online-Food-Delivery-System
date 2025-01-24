 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/Placeorder/placeorder'

 
 export default function App() {
   return (
     <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />

      </Routes>
     </div>
   )
 }
 