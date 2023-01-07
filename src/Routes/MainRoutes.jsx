import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'

export default function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users-details' element={<Users/>}/>
    </Routes>
  )
}
