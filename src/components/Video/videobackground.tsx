// components/VideoBackground.tsx
import React from "react";
import "./VideoBackground.css";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-container">
      <video
        className="video-bg"
        src="/videos/Coding.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default VideoBackground;