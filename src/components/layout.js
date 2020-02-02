/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  let initialWidth = window.innerWidth;
  const [width, setWidth] = useState(initialWidth);
  const [message, setMessage] = useState(
    "Twoja wiadomosc jest w pełni anonimowa"
  );
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  function adjustLayout() {
    setWidth(window.innerWidth);
  }
  function textAreaHandler(e) {
    console.log(e.target.value);
    setMessage(e.target.value);
  }
  window.addEventListener("resize", adjustLayout);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} initialWidth={width} />
      <div
        style={{
          margin: `0 auto`
        }}
      >
        <main style={{ minHeight: "calc(100vh - 170px)" }}>{children}</main>
        <footer
          style={{
            backgroundImage: `linear-gradient(to left, purple, navy)`,
            width: "100vw",
            margin: "10px 0 0 0",
            minHeight: 300,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            color: `white`
          }}
        >
          <div
            style={{
              width: "100vw",
              minHeight: "75px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              color: "white",
              alignItems: "center",
              flexWarp: "wrap",
              marginBottom: 10,
              padding: 10
            }}
          >
            <label
              htmlFor="message"
              style={{
                margin: 5
              }}
            >
              Byłeś świadkiem nieetycznego postępowania? Daj nam znać: <br />
              <textarea
                style={{ margin: 10 }}
                onChange={textAreaHandler}
                value={message}
              />
              <button
                style={{ borderRadius: 5, marginTop: 20, float: "right" }}
              >
                Wyślij
              </button>
            </label>
          </div>
          <div
            style={{
              width: "100vw",
              minHeight: "75px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              color: "white",
              alignItems: "center",
              padding: 10
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.gatsbyjs.org"
            >
              © {new Date().getFullYear()}, Stronę stworzył Edwin Harmata
              {` `}
              współpracując z Gatsbim
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
