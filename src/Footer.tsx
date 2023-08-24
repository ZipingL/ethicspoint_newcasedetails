import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import ReactDOM from "react-dom/client";

import secureLogo from "./Assets/sas70-logo.gif";
import "./Footer.css";
import { useLocation } from "react-router-dom";

export default function Footer(props: { print?: boolean }) {
  const location = useLocation();
  const [print, setPrint] = React.useState(props.print || false);
  React.useEffect(() => {
    if (location.pathname === "/print" && !print) {
      setPrint(true);
    }
  }, [useLocation, print]);
  const printStyles: React.HTMLAttributes<HTMLDivElement> &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    React.CSSProperties = {
    printColorAdjust: print ? "exact" : undefined,
    colorAdjust: print ? "exact" : undefined,
    WebkitPrintColorAdjust: print ? "exact" : undefined,
    backgroundColor: "#333",
  };

  return (
    <div
      id="footer"
      className="page-footer"
      style={{
        ...printStyles,
      }}
    >
      <div>
        <a
          href="http://www.navexglobal.com"
          target="_blank"
          className="cursor-a"
        >
          <svg
            height={40}
            width={140}
            style={{
              maxWidth: "140px",
              maxHeight: "40px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2015 455"
            fill="#fff"
            xmlnsXlink="https://vecta.io/nano"
          >
            <path d="M433.5 445.1h0c-20 0-33.6-20.2-26-38.7L560.7 30.8c5.2-12.7 17.6-21 31.3-21h0c13.5 0 25.7 8.1 31.1 20.5l160.8 374.8c8.1 18.9-5.8 40-26.4 40h0c-11.6 0-22-6.9-26.5-17.6L591.7 95.7 459.6 427.4c-4.3 10.7-14.6 17.7-26.1 17.7zm-138.9.1h0c-12.3 0-23.7-6.3-30.3-16.7L64.2 112.8v305c0 15.1-12.3 27.4-27.4 27.4h0c-15.1 0-27.4-12.3-27.4-27.4v-372c0-19.9 16.1-36 36-36h0a35.9 35.9 0 0 1 30.4 16.8l199.9 316.1V37.2c0-15.1 12.3-27.4 27.4-27.4h0c15.1 0 27.4 12.3 27.4 27.4v372.1c0 19.8-16 35.9-35.9 35.9zm671.2 0h0c-15 0-28.4-9.2-33.9-23.2l-146-374.4c-7.1-18.2 6.3-37.9 25.9-37.9h0c11.5 0 21.8 7.1 25.9 17.8L965 358.9l126.1-331.3c4.1-10.7 14.3-17.8 25.8-17.8h0c19.3 0 32.7 19.4 25.8 37.5l-143 374.5c-5.3 14.1-18.9 23.4-33.9 23.4zm500.4 0h-220.1c-14.5 0-26.3-11.8-26.3-26.3V36.1c0-14.5 11.8-26.3 26.3-26.3h211.2c14.5 0 26.3 11.8 26.3 26.3h0c0 14.5-11.8 26.3-26.3 26.3h-181.6V192H1450c14.5 0 26.3 11.8 26.3 26.3h0c0 14.5-11.8 26.3-26.3 26.3h-174.3v148h190.5c14.5 0 26.3 11.8 26.3 26.3h0c0 14.5-11.8 26.3-26.3 26.3zm439.2-43.8l-132.2-182.8 119.2-164.9c8.9-12.4 6.1-29.7-6.3-38.6h0c-12.4-8.9-29.7-6.1-38.6 6.3l-108.4 150-108.5-150c-8.9-12.4-26.2-15.3-38.6-6.3h0c-12.4 8.9-15.3 26.2-6.3 38.6L1705 218.6l-132.2 182.8c-8.9 12.4-6.1 29.7 6.3 38.6h0c12.4 8.9 29.7 6.1 38.6-6.3L1739 265.8l121.4 167.9c8.9 12.4 26.2 15.3 38.6 6.3h0c12.5-8.9 15.3-26.2 6.4-38.6zM1953 19.5c0 3.2-2 4.8-5.9 4.8h-8.8v29.9c0 1.9-.6 3.3-1.8 4.3s-2.6 1.6-4.3 1.6-3.2-.5-4.3-1.6c-1.2-1-1.8-2.5-1.8-4.3V24.4h-8.8c-3.9 0-5.8-1.6-5.8-4.8 0-1.7.5-3 1.4-3.8s2.4-1.2 4.4-1.2h29.7c4.1-.1 6 1.6 6 4.9zm49.2-3.9c1.1 1 1.7 2.4 1.7 4.3v34.2c0 1.9-.5 3.4-1.6 4.4s-2.3 1.6-3.7 1.6-2.6-.5-3.6-1.6c-1.1-1-1.6-2.5-1.6-4.4v-18l-7 13.2c-.7 1.4-1.5 2.3-2.3 2.9s-1.8.9-2.9.9-2.1-.3-2.9-.9-1.6-1.6-2.4-2.9l-7-12.8v17.7c0 1.9-.5 3.4-1.6 4.4s-2.3 1.6-3.7 1.6-2.6-.5-3.7-1.6c-1.1-1-1.7-2.5-1.7-4.4V19.9c0-1.9.6-3.3 1.7-4.3s2.5-1.5 4.1-1.5c2.3 0 4.1 1.3 5.6 4l11.7 22.1 11.6-22.1c1.4-2.6 3.2-4 5.5-4 1.4 0 2.7.5 3.8 1.5z" />
          </svg>
        </a>
        <div
          className="text"
          aria-label="site"
          style={{
            justifyContent: "space-between",
          }}
        >
          <a
            className="text"
            href="http://www.navexglobal.com/privacy-statement"
            target="_blank"
            title="Privacy Statement"
          >
            Privacy Statement
          </a>
          {" | "}
          <a
            className="text"
            href="http://www.navexglobal.com/terms-of-use"
            target="_blank"
            title="Terms of Use"
          >
            Terms of Use
          </a>
          {" | "}
          <a
            className="text"
            href="https://www.navex.com/cookie-statement"
            target="_blank"
            title="Cookie Statement"
          >
            Cookie Statement
          </a>
          {" | "}
          <a
            className="text"
            href="https://amazondotcom.navexone.com/incidents/About"
            title="About"
          >
            About
          </a>
        </div>
        <div className="copyright">
          © NAVEX Global 2023. All rights reserved.
        </div>
      </div>
      <div className="footer-container__img">
        <div style={{ float: "right" }}>
          <div>
            <a
              href="//privacy.truste.com/privacy-seal/validation?rid=90dc38ca-6e1d-4f98-bbd4-9931d1681c0a"
              target="_blank"
            >
              <img
                style={{ border: "none", height: 33, width: 104 }}
                src="//privacy-policy.truste.com/privacy-seal/seal?rid=90dc38ca-6e1d-4f98-bbd4-9931d1681c0a"
                alt="TRUSTe"
              />
            </a>
          </div>
        </div>
        <a target="_blank">
          <img
            style={{ float: "right", padding: "0 10px", cursor: "default" }}
            alt="SAS 70 Type II"
            src={secureLogo}
          />
        </a>
      </div>
    </div>
  );
}
