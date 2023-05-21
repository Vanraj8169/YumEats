const NavBar = () => {
    return (
      <div className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Yum%21_Logo.svg/1217px-Yum%21_Logo.svg.png"
          alt="logo"
        />
        <div className="nav-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
export default NavBar;