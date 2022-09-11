import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ComicBox from './views/ComicBoxView'
import Login from './views/LoginView'
import Profile from './views/ProfileView'
import Search from './views/SearchView'
import Register from './views/RegisterView'
import Nav2 from './components/Nav2'
import Nav from './components/Nav'

export default function App() {

  const getUserFromLocalStorage = () => {
    const foundUser = localStorage.getItem('user')
    if (foundUser) {
      return JSON.parse(foundUser)
    }
    return {}
  };

  const [setUser] = useState(getUserFromLocalStorage())

  const logMeIn = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  };

  const logMeOut = () => {
    setUser({})
    localStorage.removeItem('user')
  };


  return (

    <BrowserRouter>

      <div className='main'>
      <Nav/>

      <Nav2 logMeOut={logMeOut} />

        <Routes>
          <Route path='/search' element={<Search />} />
          <Route path='/comicbox' element={<ComicBox />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Login logMeIn={logMeIn} />} />
        </Routes>

      </div>

    </BrowserRouter>
  )
};