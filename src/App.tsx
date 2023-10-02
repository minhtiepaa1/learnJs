import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyTable from "./components/MyTable";
import { Transfer } from "antd";
import State from "./container/hook/State";

function App() {
  return (
    <div className="App">
      <div>
        <MyTable />

        <input type="number" min={0} max={9999999} />
        <State />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
