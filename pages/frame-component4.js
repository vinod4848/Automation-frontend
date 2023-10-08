import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./frame-component4.module.css";
import { useRouter } from "next/router";

const FrameComponent4 = () => {
  const [blogs, setBlogs] = useState([]);
  const [ad, setAd] = useState(null);
  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const apiUrl = process.env.api;
  const carouselRef = useRef(null);
  const router = useRouter();
  const defaultImage =
    "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/post/products`);
        setBlogs(response.data.posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
    const fetchAd = async () => {
      // Change from fetchAds to fetchAd
      try {
        const response = await axios.get(`${apiUrl}/api/mainads/Featured Ads`);
        setAd(response.data[0]); // Set only the first ad
      } catch (error) {
        console.error("Error fetching ad:", error);
      }
    };

    fetchAd();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      // If on the first page, loop to the last page
      setCurrentPage(totalPages);
    }
  };

  const handleBlogClick = (blogId) => {
    router.push(`/category/products?id=${blogId}`);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      // If on the last page, loop to the first page
      setCurrentPage(1);
    }
  };

  const renderBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const visibleBlogs = blogs.slice(startIndex, endIndex);

    return visibleBlogs.map((blog, index) => (
      <div
        key={index}
        className={styles.rectangleParent}
        onClick={() => handleBlogClick(blog.id)}
      >
        <img
          className={styles.groupChild}
          alt=""
          src={blog.image || defaultImage} // Use the blog's image or default placeholder image
        />
        <div className={styles.blogTitle}>{truncateWords(blog.title, 6)}</div>
        <div className={styles.desc}>{truncateWords(blog.metaDescription, 6)}</div>
      </div>
    ));
  };

  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    } else {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
  };

  return (
    <div className={styles.featuredContentParent}>
      <div className={styles.featuredContent}>
        <h1 className={styles.featuredContent1}>Featured Products</h1>

        {ad && (
          <img
            className={styles.featuredProductsChild}
            alt="Ad"
            style={{ objectFit: "fill", height: "500px", width: "1100px" }}
            src={ad.image || defaultImage}
          />
        )}

        <div className={styles.carouselContainer}>
          <button
            className={`${styles.carouselButton1} prev`}
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <div className={styles.carouselWrapper} ref={carouselRef}>
            {renderBlogs()}
          </div>
          <button
            className={`${styles.carouselButton2} next`}
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </div>
        <div className={styles.featuredContentChild}>
          {/* ... (navigation buttons, same as before) */}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
