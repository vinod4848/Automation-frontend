import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [ads, setAds] = useState([]);
  const apiUrl = process.env.api;
 

  useEffect(() => {
    const api = `${apiUrl}/api/banner/allbanners`;

    axios.get(api).then((response) => {
      const banners = response.data;
      setAds(banners);
    });
  }, []);

  // Settings for the horizontal slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on navigation
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (adjust as needed)
    arrows: true, // Show navigation arrows
    pauseOnHover: true, // Pause autoplay on hover
    swipeToSlide: true, // Enable swiping to navigate
    adaptiveHeight: true, // Adjust the height of each slide based on its content
  };

  return (
    <div className="header-ad">
      {ads.length > 0 ? (
        <Slider {...sliderSettings}>
          {ads.map((ad, index) => (
            <div key={index}>
              <div>
                <a href={ad.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={ad.image}
                    alt="Ad"
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "fill",
                    }}
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading ads...</p>
      )}
    </div>
  );
};

export default Banner;
