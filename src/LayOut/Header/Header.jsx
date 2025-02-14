import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="md:mx-8">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-2 w-52 space-y-3 p-2 shadow text-center"
            >
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/products">Products</Link>
              {user ? (
              false
            ) : (
              <Link to="/signUp">SignUp</Link>
            )}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-error mt-3 text-white"
                >
                  LogOut
                </button>
              ) : (
                <Link to="/signIn">SignIn</Link>
              )}
            </ul>
          </div>
          <span className="text-2xl font-bold text-error">
            <Link to="/">Shop-Store</Link>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-2 space-x-4 items-center ">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/products">Products</Link>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex">
          <div className="menu menu-horizontal px-2 space-x-2 items-center">
            {user? <img className='w-10 h-10 rounded-full object-cover ' src={user.photoURL} alt="" title={user.displayName}/> : false}
            {user ? (
              <span className="font-semibold text-error">{user.displayName}</span>
            ) : (
              <Link to="/signUp">SignUp</Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-error ml-8 w-25 text-white"
              >
                LogOut
              </button>
            ) : (
              <Link className="btn btn-error ml-8 text-white" to="/signIn">
                SignIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
