import React from "react";
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter_text">
        <h3>@idan_the _king</h3>
        <p>this is the description</p>
      </div>
      <img
        className="VideoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}
export default VideoFooter;
