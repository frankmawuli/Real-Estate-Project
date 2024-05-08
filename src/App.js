import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Buy from './Pages/BuyPage'
import Advertise from './Pages/Advertise'
import Rent from './Pages/Rent'
import Mortage from './Pages/Mortage'
import MyHome from './Pages/MyHome'
import NewsAndInsights from './Pages/NewsAndInsights'
import  Sell from './Pages/SellPage'
import Navbar from './Componenets/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path = 'buy' element={<Buy/>}/>
        <Route path='advertise' element={<Advertise/>}/>
        <Route path='rent' element={<Rent/>}/>
        <Route path=' mortage' element={<Mortage/>}/>
        <Route path='myHome' element={<MyHome/>}/>
        <Route path='newsInsight' element={<NewsAndInsights/>}/>
        <Route path='sell' element={<Sell/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
