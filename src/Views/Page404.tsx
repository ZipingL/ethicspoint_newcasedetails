import React from "react";
import SideNav from "../SideNav";

export default function Page404() {
  const [isNavCLosed, setNavClosed] = React.useState(false);
  const handleNavToggle = React.useCallback(
    (e: any) => {
      e?.preventDefault();
      e?.stopPropagation();
      e?.nativeEvent?.stopImmediatePropagation();
      setNavClosed(!isNavCLosed);
    },
    [isNavCLosed],
  );

  return (
    <div id="epWrapper" className="page-header">
      <div className="page-wrapper">
        <div id="epHeader" className="page-top-header">
          <div id="header-left" className="header-left">
            <div id="top-header-nav-icon" className="page-top-header-nav-icon">
              <span
                id="menu-toggle"
                role="button"
                className="toggle-sidebar-icon"
                data-toggle="tooltip"
                title=""
                data-container="body"
                aria-label="Toggle Sidebar"
                aria-expanded="true"
                data-original-title="Toggle Sidebar"
                onClick={handleNavToggle}
              >
                <i className="fa fa-bars fa-icon" />
              </span>
            </div>
            <div id="header" className="header-logo">
              <img
                alt="NAVEX"
                src="https://amazondotcom.navexone.com/incidents/images/header-logo.svg"
              />
            </div>
          </div>
          <div className="header-right">
            <h1 id="labelIssueType" className="issue-type">
              Issue&nbsp;Type:
            </h1>
            <h1 id="labelIssueTypeValue" className="issue-type-value">
              Discrimination
            </h1>
          </div>
        </div>
        <div id="epContent" className="page-inner-wrap">
          <SideNav className={isNavCLosed ? "navToggle" : ""}></SideNav>
          <div id="epMainContent" className="page-content">
            <p>
              This page does not yet exist as a publically viewable path. Please
              refer to the case details page, via
              <a
                rel="noopener noreferrer"
                href="https://secure.ethicspoint.com/domain/en/default_reporter.asp"
                target="_blank"
              >
                Amazon's Navex Portal
              </a>
              , to view this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
