import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videos, videoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        videoSelect={videoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
