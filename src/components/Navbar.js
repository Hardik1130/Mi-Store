import React from 'react'
import "../styles/nav.css"
// import {Link} from "react-router-dom"

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

const Navbar = () => {
  return (
    <div className="nav" >

      {/* //logo */}
        <div className="logo">

          <a to="/">
              <img src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="Not" id="logoImage" />
          </a>
        </div>
      {/* //logo */}

      {/* navbar */}
          <a href="/redmiphones" className="navlinks">Redmi Phones</a>
          <a href="/miphones" className="navlinks">Mi Phones</a>
          <a href="/tv" className="navlinks">TV</a>
          <a href="/laptops" className="navlinks">Laptops</a>
          <a href="/lifestyle" className="navlinks">Fitness & Lifestyle</a>
          <a href="/home" className="navlinks">Home</a>
          <a href="/radio" className="navlinks">Radio</a>
          <a href="/accessories" className="navlinks">Accessories</a>

          <div className="searchbox">
            <input type="text" name="search" id="" placeholder="Search Products" />
            {searchIcon}
          </div>
      {/* navbar */}

    </div>
  )
}

export default Navbar