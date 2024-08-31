import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = ({ theme, onThemeSwitch }) => {
  const [menu, setMenu] = useState("shop");
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('auth-token'));
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation(); // Get the current path

  // Effect to update the authentication state based on local storage
  useEffect(() => {
    const authToken = localStorage.getItem('auth-token');
    setIsAuthenticated(!!authToken);
  }, [location]); // Runs when location changes, i.e., on navigation

  const isOnLoginPage = location.pathname === '/login'; // Check if the current path is /login

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setIsAuthenticated(false); // Update authentication state
    window.location.replace('/'); // Redirect to home or another page
  };

  return (
    <div className="navbar">
      <Logo theme={theme} />

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={onThemeSwitch} className="theme-toggle-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
        </button>
        {!isOnLoginPage && (
          <>
            {isAuthenticated ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login"><button>Login</button></Link>
            )}
          </>
        )}

        {isAuthenticated && (
          <div>
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
