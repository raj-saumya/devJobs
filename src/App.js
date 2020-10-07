import React from "react";
import "./App.css";
import Header from "./components/Header";
import JobsList from "./components/JobsList";
import DataStore from "./services/DataStore";
import Theme from "./services/Theme";

function App() {
  return (
    <DataStore>
      <Theme>
        <div className="main">
          <Header />
          <JobsList />
        </div>
      </Theme>
    </DataStore>
  );
}

export default App;
