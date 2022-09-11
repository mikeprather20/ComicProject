//NAVBAR MADE WITH BOOTSTRAP

import React from 'react'
// import { Link } from 'react-router-dom';

export default function Nav2() {



  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/comicbox">My Comics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search for Comic</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">Edit Profile</a>
        </li>
        {/* <li className="nav-item" onClick={this.props.logMeOut}>
          <Link className="nav-link" to="/">Log Out</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
