import React, { useState } from "react";
import { Link } from "@reach/router";

function Navigation(props) {
  const { logout } = props;
  return (
    <>
      <nav class="nav-main">
        <div class="nav-main-inner1">
          <h1> The wishlist</h1>
        </div>

        <div class="nav-main-inner2">
          {props.currentuser ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button id="login">login</button>
            </Link>
          )}
        </div>

        <div>
          <Link to="/">
            <button id="link-wishlist">WISHLIST</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
