import React from 'react'
import { Link } from 'react-router-dom'

// import  nodemailer from 'nodemailer'
export default function Navbar() {
    return (
        <div id='navibar'>
            <nav className="navbar navbar-expand-lg navbar-transparent ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" id='brandName'>Fresh Junction</Link>
                    <Link className="nav-link" id='homeBtn' aria-current="page" to="/">Home</Link>
                    
                    {/* <button className="navbar-toggler" id="hamburger"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " aria-current="page" to="/menu">Menu</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="book">Book Table</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
