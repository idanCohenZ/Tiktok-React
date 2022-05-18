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
        src="https://v16-webapp.tiktok.com/ea02884a5cb4f5d28c54673b2ebf002c/627e991a/video/tos/alisg/tos-alisg-pve-0037c001/fa2679d367f54f3c8cd0496760327c0e/?a=1988&br=1776&bt=888&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6H.vMyq8ZaD5qwe2N9yQml7Gb&l=2022051311440301024524501118205695&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lkaDM6ZnJoODMzODczNEApNWg3ZTUzZmVlNzVpNDU8NGdqYTFxcjQwcGdgLS1kMS1zc18wYF80X2IzYy4xYGFjLmI6Yw%3D%3D&vl=&vr="
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
