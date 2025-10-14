import React from "react";
import { IVideoPlayerProps } from "./types";

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  controls = true,
  title = "Video player",
  className,
  onEnded,
}) => {
  return (
    <div className={`relative w-full   ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        controls={controls}
        aria-label={title}
        onEnded={onEnded}
         className="absolute top-0 left-0 w-full h-full object-contain"
      >
        Sorry, your browser doesn’t support embedded videos.
      </video>
    </div>
  );
};

export default VideoPlayer;
