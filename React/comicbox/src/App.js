import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ComicBox from './components/ComicBoxC'
import Login from './components/LoginC'
import Profile from './components/ProfileC'
import Search from './components/SearchC'
import Signup from './components/SignupC'

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


  return (

    <BrowserRouter>

      <div className='main'>


        <Routes>
          <Route path='/Search' element={<Search />} />
          <Route path='/ComicBox' element={<ComicBox />} />
          <Route path='/SignUp' element={<Signup />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Login' element={<Login logMeIn={logMeIn} />} />
        </Routes>

      </div>

    </BrowserRouter>
  )
};




//#rcc

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="main">
//     </div>
//   );
// }

// export default App;
