import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Log from './Picture/Log.png';
import './Navbar.css';
import icon1 from './icon/icon1.png';
import icon2 from './icon/icon2.png';
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a> <img className='img-flud log p-3' src={Log}/> <b className='lead'>i lead My Future</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <button className='btns d-block mx-auto'>English</button>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"><span className='Empty'>Empty</span></a></li>
                  <li><a class="dropdown-item" href="#"><span className='Empty'>Empty</span></a></li>
                  <li><a class="dropdown-item" href="#"><span className='Empty'>Empty</span></a></li>
                </ul>
              </li>
            </ul>

            <div className='like gap-4 d-flex justify-content-center gap-3'>
              <divl>
                <img className='imgs' src={icon1} />
              </divl>

              <div>
                <img className='imgd' src={icon2} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
