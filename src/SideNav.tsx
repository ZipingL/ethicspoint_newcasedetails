import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideNav = (props: { className?: string }) => {
  const location = useLocation();

  const isActiveLink = (link: string) => {
    console.info("path", location?.pathname, link);
    return location?.pathname === link;
  };
  const className = props.className || "";

  return (
    <div
      id="epColumn2"
      className={`side-navbar${
        className && className.length > 0 ? ` ${className}` : ""
      }`}
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n              .navSmallHeading {\n                font-weight: bold;\n                color: #0e8f9e;\n                margin-top: 7px;\n              }\n\n              .navSmallHeadingNoMargin {\n                margin-top: 0px;\n              }\n\n              .navItem {\n                display: block;\n              }\n            ",
        }}
      />
      <div id="navlinks" className="sidebar-nav">
        <Link
          to="/followup"
          id="linkAnswerQuestions"
          className={`menuItems-heading menuItems${
            isActiveLink("/followup") ? " menuItem-active" : ""
          }`}
        >
          Questions and Comments
        </Link>
        <div id="panelActiveCaseLinks">
          <Link
            to="/add/notes"
            id="linkPostNote"
            className={`menuItems-heading menuItems${
              isActiveLink("/add/notes") ? " menuItem-active" : ""
            }`}
          >
            Add Follow-Up Notes
          </Link>
          <Link
            to="/add/files"
            id="linkUploadFile"
            className={`menuItems-heading menuItems${
              isActiveLink("/add/files") ? " menuItem-active" : ""
            }`}
          >
            Upload Files
          </Link>
        </div>
        <div id="panelReportDetailLinks">
          <div id="pnlViewReportDetails">
            <Link
              to="/"
              id="linkViewReportDetails"
              className={`menuItems-heading menuItems${
                isActiveLink("/") ? " menuItem-active" : ""
              }`}
            >
              Report Details
            </Link>
          </div>
          <Link
            to="/print"
            id="linkPrintReport"
            className={`menuItems-heading menuItems${
              isActiveLink("/print") ? " menuItem-active" : ""
            }`}
          >
            Print My Report
          </Link>
        </div>
        <a
          href="https://amazondotcom.navexone.com/incidents/Followup/Authenticate/Logout?key=C4D3A1D1-3F3F-4DF0-854B-5026E7A662A3&culture=EN"
          id="linkLogOut"
          className="menuItems-heading menuItems"
        >
          Log Off
        </a>
      </div>
    </div>
  );
};

export default SideNav;
