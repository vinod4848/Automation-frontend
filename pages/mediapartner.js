import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "../components/Banner";
import styles from "./mediapartner.module.css"; // Import your CSS file for styling

const MediaPartner = () => {
  // Create an array of objects, each containing an imageUrl and a link
  const mediaPartners = [
    {
      imageUrl:
        "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/Aug23/iec-logo.jpg",
      link: "https://www.industrialautomationindia.in/banner/Aug23/Advertorial.pdf",
    },
    {
      imageUrl:
        "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/ae-south-media-partner3.jpg",
      link: "https://www.industrialautomationindia.in/automation-expo-south",
    },
    {
      imageUrl:
        "https://www.industrialautomationindia.in/images/banner/ls-ieee-logo.jpg",
      link: "https://ieeesmartlightingworld.org/",
    },
    {
      imageUrl:
        "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/hm-media-partner1.jpg",
      link: "https://www.hannovermesse.de/en/press/media-partner/",
    },
    {
      imageUrl:
        "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/media-partner5.jpg",
      link: "https://www.timtos.com.tw/en/menu/1EA47DE52AB5F303D0636733C6861689/info.html",
    },
    {
      imageUrl: "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/arc.jpg",
      link: "https://www.arcweb.com/events/arc-industry-forum-asia",
    },
    {
      imageUrl:
        "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/ae-mum-media-partner2.jpg",
      link: "https://www.industrialautomationindia.in/automation-expo-mumbai",
    },
    {
      imageUrl:
        "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/Aug23/adipec-logo1.jpeg",
      link: "https://www.adipec.com/conferences/download-strategic-conference-programmes/?utm_source=media-partner&utm_medium=website&utm_campaign=industrial-automation&utm_content=adipec2023",
    },
    {
      imageUrl:
        "https://wwwd601d2yq4c.cdn.e2enetworks.net/banner/media-partner4.jpg",
      link: "https://www.instagram.com/isamaharashtra/?hl=en",
    },
  ];

  return (
    <div>
      <Header />
      <Banner />
      <div className={styles.mediaPartnerContainer}>
        <h1 className={styles.h1container}>Media Partners 2023</h1>
        <div className={styles.imageGrid}>
          {mediaPartners.map((partner, index) => (
            <a href={partner.link} key={index} className={styles.imageLink}>
              <img
                src={partner.imageUrl}
                alt={`Media Partner ${index + 1}`}
                className={styles.image}
                width="250px"
                height="250px"
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaPartner;
