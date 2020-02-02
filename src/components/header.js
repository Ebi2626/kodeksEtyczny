import { Link } from "gatsby";
import navItems from "./../data/navItems";
import PropTypes from "prop-types";
import Hamburger from "./hamburger";
import React from "react";

const Header = ({ siteTitle, initialWidth }) => {
  const menuList = navItems.map(el => (
    <li>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to={el.toLowerCase().replace(" ", "-")}
        key={el.toLowerCase().replace(" ", "-")}
      >
        {el}
      </Link>
    </li>
  ));
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to left, purple, navy)`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-around`,
        height: 120
      }}
    >
      <div
        style={{
          maxWidth: 300,
          margin: `0 10px`,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            etyka naFroncie
          </Link>
        </h1>
      </div>
      <nav
        style={{
          position: "relative",
          width: "60vw",
          maxWidth: 800,
          minWidth: initialWidth > 800 ? 400 : 100,
          height: "100%"
        }}
      >
        {initialWidth > 800 ? (
          <ul
            style={{
              display: "flex",
              position: "absolute",
              width: "100%",
              flexDirection: "row",
              justifyContent: initialWidth > 800 ? "space-around" : "flex-end",
              alignItems: "center",
              listStyleType: "none",
              height: "100%"
            }}
          >
            {menuList}
          </ul>
        ) : (
          <Hamburger />
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
