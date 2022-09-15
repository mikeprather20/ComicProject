//NAVBAR MADE WITH BOOTSTRAP

import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../SharedState'

// import { Link } from 'react-router-dom';

export default function Nav2() {
  const loggedIn = sessionStorage.getItem('userId')
  const navigator = useNavigate()
  console.log(loggedIn)
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {loggedIn && <>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/comicbox">My Box</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="/search">Search for Comic</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile">Edit Profile</a>
          </li>
          <li className="nav-item" onClick={()=>(sessionStorage.clear(), navigator('/'))}>
            <a class="nav-link" href="/">Log Out</a>
          </li>
        </> }

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
