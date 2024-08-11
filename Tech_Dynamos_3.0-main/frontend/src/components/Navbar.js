import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-container mt-3'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 fw-bold fs-1 text-logo-gradient" to="">SafeZone</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fw-bold">
                <Link className="nav-link active" style={{fontSize: "20px",marginRight:"20px"}} aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link" aria-current="page" style={{fontSize: "20px",marginRight:"20px"}} to="/Emergency">Emergency</Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link" aria-current="page" style={{fontSize:"20px",marginRight:"20px"}} to="/LearnProtect">Learn&Protect</Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link" aria-current="page" style={{fontSize:"20px",marginRight:"20px"}} to="/Community">Community</Link>
              </li>
              <li className="nav-item fw-bold">
                <Link className="nav-link" aria-current="page" to="/Community"><img src='Vector.svg' className='notification'></img></Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Login">Login</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
