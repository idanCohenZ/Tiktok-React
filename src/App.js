import "./App.css";
import Video from "./Video";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello rocket programmer</h1>
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
