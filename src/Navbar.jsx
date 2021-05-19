

const Navbar = () => {
  return(
    <nav>
      <div className="logo">
        <h1><span>E</span><span>R</span><span>A</span><span>Y</span></h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">
              hakkimda
            </a>
          </li>
          <li>
            <a href="#">
              yaptigimIsler
            </a>
          </li>
          <li>
            <a href="#">
            iletisim
            </a>
          </li>
          <li>
            <a href="#">
              yorumlar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;