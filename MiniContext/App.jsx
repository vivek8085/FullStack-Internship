import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {

  return (
    <>
    <h1 className='text-3xl font-bold underline text-center mt-10'>Context Api</h1>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
