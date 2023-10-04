import React, { useState, useEffect } from "react";
import axios from "axios";

const DirectoryAds = () => {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = process.env.api;

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/mainads/Directory Ads`)
      .then((response) => {
        response.data.sort(
          (a, b) => new Date(b.dateField) - new Date(a.dateField)
        );

        const latestAds = response.data.slice(0, 5);

        setAds(latestAds);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error fetching ads: {error.message}</div>;
  }

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        height: "fit-content",
        listStyleType: "none", // Remove list dots
        padding: 0, // Remove default padding
      }}
    >
      {ads.map((ad, index) => (
        <li
          key={index}
          className="ad-item"
          style={{
            width: "269px",
            height: "269px",
          }}
        >
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img
              src={ad.image}
              alt={ad.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DirectoryAds;
