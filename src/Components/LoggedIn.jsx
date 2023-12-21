import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPage from './UserPage'
import CreateNewNote from './CreateNewNote'

const LoggedIn = () => {
  return (
    <div>
        <Routes>
            <Route path='/'
            element={<UserPage/>} />
            <Route path='/NewNote'
            element={<CreateNewNote/>} />
        </Routes>
    </div>
  )
}

export default LoggedIn