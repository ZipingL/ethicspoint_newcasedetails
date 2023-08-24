import React from "react";
import SideNav from "../SideNav";

export default function Followup() {
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
          <div id="epColumn1" className="page-right-container"></div>
          <form
            action="/incidents/Followup/Questions/Edit?key=C4D3A1D1-3F3F-4DF0-854B-5026E7A662A3&culture=EN"
            id="EditQuestionForm"
            method="post"
          >
            <input
              name="__RequestVerificationToken"
              type="hidden"
              defaultValue="SQw_hed8bcFYaCUYJPln5NqBosRNfI-CnUbRJwf9H9f_L001m_Y-V4yJYflsZcWSl9sDbPril4P9JoWOUD828ALGAJA1"
            />{" "}
            <div>
              <div id="panelQuestions" className="right-nav-question-panel">
                <div className="navHeading-panel">
                  <span id="headingQuestions" className="page-section-title">
                    Questions and Comments
                  </span>
                </div>
                <div id="SystemMessage" style={{ display: "none" }}>
                  <span id="SystemMessageText" />
                </div>
                <div
                  id="questionAndCommentDetails"
                  style={{ display: "table" }}
                >
                  <div
                    id="panelPageInstructions"
                    className="pageinstructions rightNav-content"
                  >
                    <span id="labelInstructions">
                      The organization does not have any questions or comments
                      at this time.{" "}
                    </span>
                    <br />
                  </div>
                  <div id="panelButtons"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
