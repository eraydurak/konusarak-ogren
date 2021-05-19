import { useState, useEffect } from 'react'

window.addEventListener('scroll', function () {
  let header = document.querySelector('nav');
  header.classList.toggle('active', window.scrollY > 0)
})


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1><span>E</span><span>R</span><span>A</span><span>Y</span></h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="/">
              hakkimda
            </a>
          </li>
          <li>
            <a href="#works">
              yaptigimIsler
            </a>
          </li>
          <li>
            <a href="#contact">
              iletisim
            </a>
          </li>
          <li>
            <a href="#comment">
              yorumlar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;