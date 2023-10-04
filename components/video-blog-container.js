import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./video-blog-container.module.css";

const VideoBlogContainer = ({ playlistId, propTop, propLeft }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Define your YouTube Data API key
    const apiKey = "AIzaSyBQgI6YCkvOvAUGC3D65wZQmjVEMORcO74";

    // Make a request to fetch playlist items
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=10`
      )
      .then((response) => {
        const videoData = response.data.items.map((item) => {
          return {
            videoId: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnailUrl: item.snippet.thumbnails.default.url,
          };
        });
        setVideos(videoData);
      })
      .catch((error) => {
        console.error("Error fetching YouTube playlist:", error);
      });
  }, [playlistId]);

  return (
    <div className={styles.rectangleParent} style={{ top: propTop, left: propLeft, width: "320px", height: "384px", overflowY: "scroll" }}>
      {videos.map((video) => (
        <div key={video.videoId} className={styles.videoContainer} >
          <iframe
            width="300"
            height="121"
            src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoBlogContainer;
