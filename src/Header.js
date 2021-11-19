import "./Header.css";
import React, { useContext } from "react";
import burgerImage from "./burgerImage.png";
import { Link } from "react-router-dom";
import { BurgerContext } from "./BurgerContext";

function Header() {
  const { loginCheck } = useContext(BurgerContext);
  const [login, setLogin] = loginCheck;

  return (
    <header className="Toolbar__Toolbar__2hkfg">
      <div className="DrawerToggle__DrawerToggle__1eThf">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="Toolbar__Logo__24rue">
        <div className="Logo__Logo__2A07e">
          <img src={burgerImage} alt="myBurger" />
        </div>
      </div>
      <nav className="Toolbar__DesktopOnly__15Sc_">
        <ul className="NavigationItems__NavigationItems__3HY9i">
          <li className="NavigationItem__NavigationItem__3YSjr">
            <a
              className="NavigationItem__active__2GQz1"
              aria-current="true"
              href="/"
            >
              Burger Builder
            </a>
          </li>
          {login ? (
            <>
              <li className="NavigationItem__NavigationItem__3YSjr">
                <Link to="/orders" className="login-link">
                  <a className="login_style" aria-current="false" href="/auth">
                    Orders
                  </a>
                </Link>
              </li>
              <li className="NavigationItem__NavigationItem__3YSjr">
                <Link to="/logout" className="login-link">
                  <a
                    className="login_style"
                    aria-current="false"
                    href="/auth"
                    onClick={() => setLogin(false)}
                  >
                    Logout
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <li className="NavigationItem__NavigationItem__3YSjr">
              <Link to="/sign_up" className="login-link">
                <a className="login_style" aria-current="false" href="/sign_up">
                  Login
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
