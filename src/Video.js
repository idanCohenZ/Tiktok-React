import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null); //it'a just another hook

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video_player"
        src="https://v16-webapp.tiktok.com/10b3417ad42ca936252766d63c38902f/627d4fc8/video/tos/useast2a/tos-useast2a-ve-0068c004/132e57dbe33647eca356cc5b8e590dff/?a=1988&br=2330&bt=1165&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H.vMyq8ZO9gqwe2NlDhml7Gb&l=202205121219380102452480031C02C6D1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anBzb3FraW1kNDMzNzczM0ApODY4M2k1ZGVmNzZkOjlpN2dnMGowZjVgLmxgLS1kMTZzczZhMy9eX2MzNl4xYGFgNS06Yw%3D%3D&vl=&vr="
        alt="content is unavialable"
        loop
        onClick={onVideoPress}
        ref={videoRef}
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
