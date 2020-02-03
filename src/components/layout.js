/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Row from "../style/row";
import InnerRow from "../style/innerRow";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  let initialWidth = 400;
  const [width, setWidth] = useState(initialWidth);
  const [message, setMessage] = useState(
    "Twoja wiadomość jest w pełni anonimowa"
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
    setMessage(e.target.value);
  }
  useEffect(() => {
    adjustLayout();
  });
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
          <Row>
            <InnerRow>
              <label
                htmlFor="message"
                style={{
                  margin: 5,
                  width: "80%",
                  textAlign: "center"
                }}
              >
                Byłeś świadkiem nieetycznego postępowania? Daj nam znać: <br />
                <textarea
                  style={{
                    height: 80,
                    width: "100%",
                    margin: "10px auto",
                    minWidth: 100,
                    minHeight: 50,
                    maxWidth: 600,
                    color: "#555"
                  }}
                  onChange={textAreaHandler}
                  onClick={() => {
                    if (message === "Twoja wiadomość jest w pełni anonimowa") {
                      setMessage("");
                    }
                  }}
                  value={message}
                />
              </label>
            </InnerRow>
          </Row>
          <Row>
            <InnerRow>
              <button style={{ borderRadius: 5 }}>Wyślij</button>
            </InnerRow>
          </Row>
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
