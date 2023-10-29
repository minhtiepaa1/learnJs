import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyTable from "./components/MyTable";
import { Transfer } from "antd";
import State from "./container/hook/state/State";
import Meno from "./container/hook/memo_not_hooks/Meno";

function App() {
  return (
    <div className="App">
      <div>
        {/* <MyTable /> */}

        {/* <input type="number" min={0} max={9999999} /> */}
        <Meno />
      </div>
    </div>
  );
}

export default App;
