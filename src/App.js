import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import './'

function App() {
  return (
  <>
    <Header/>
    <div className="d-flex w-100">
      <Sidebar />
      <div>
        <ContentArea />
      </div>
    </div>
  </>
  );
}

export default App;
