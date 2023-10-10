import React, { useEffect, useState } from "react";
import axios from "axios";


const HeaderAds = () => {
  const [ad, setAd] = useState(null);
  const apiUrl = process.env.api;

  useEffect(() => {
    const api = `${apiUrl}/api/headerads/allads`;

    axios.get(api).then((response) => {
      const latestAd = response.data;
      setAd(latestAd);
    });
  }, []);

  return (
    <div className="header-ad">
      {ad ? (
        <div style={{ height: "100px" }}>
          {ad.name}
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img
              src={ad[0].image}
              alt="Ad"
              style={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
          </a>
        </div>
      ) : (
        <p>Loading ad...</p>
      )}
    </div>
  );
};

export default HeaderAds;
