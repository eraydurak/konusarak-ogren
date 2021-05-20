import { useState, useEffect } from 'react'

const Navbar = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])


  return (
    <nav className={scroll ? 'active' : ''}>
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