import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../Images/logo.png"

export default function Navbar() {
  return (
  <div className='flex items-center text-lg justify-evenly border drop-shadow bg-amber-600  fixed w-full '>
    <h1 className='w-20'>
      <img src={logo} alt="" />
    </h1>
    <NavLink to= '/'>Home</NavLink>
    <NavLink to = 'buy'>Buy</NavLink>
    <NavLink to = 'sell'>Sell</NavLink>
    <NavLink to = 'rent'>Rent</NavLink>
    <NavLink to = 'mortage'>Mortage</NavLink>
    <NavLink to = 'myHome'>My Home</NavLink>
    <NavLink to = 'newsInsight'>News And Insight</NavLink>
    <NavLink to = 'advertise'>Advertise</NavLink>
    <div>
      <button className='border-none rounded-2xl text-sm w-20 bg-yellow-50 text-black drop-shadow'>Log In</button>

      <button className='mr-5 border-none rounded-2xl text-sm w-20 bg-amber-950 text-yellow-200 drop-shadow'>Sign Up</button>
    </div>

  </div>
  )
}
