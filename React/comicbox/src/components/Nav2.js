//NAVBAR MADE WITH BOOTSTRAP

import React from 'react'
// import { Link } from 'react-router-dom';

export default function Nav2() {



  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ComicBox</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">My Comics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Search for Comic</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Edit Profile</a>
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
