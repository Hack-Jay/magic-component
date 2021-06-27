import React from "react";
import MText from "components/m-text";
import "./App.css";

function App() {
  const props = {
    text: "大标题",
    fontSize: "30px",
    fontWeight: "bold",
    tag: "h2"
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* @ts-ignore */}
        <MText {...props} />
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
      </header>
    </div>
  );
}

export default App;
