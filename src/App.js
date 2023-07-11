import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
    <Header/>
    <div className="d-flex w-100">
      <Sidebar />
      <div>
        <ContentArea />
      </div>
    </div>
    </Router>

  );
}

export default App;
