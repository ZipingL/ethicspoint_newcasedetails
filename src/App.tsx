import React from "react";
import "./App.css";

import {
  HashRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Details from "./Views/Details";
import Footer from "./Footer";
import PrintView from "./Views/Print";
import Followup from "./Views/Followup";
import Page404 from "./Views/Page404";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Details />} />
        <Route path="/print" element={<PrintView />} />
        <Route path="/followup" element={<Followup />} />
        <Route path="*" element={<Page404 />} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
