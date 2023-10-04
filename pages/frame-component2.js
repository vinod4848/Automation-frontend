import VideoBlogWrapper from "../components/video-blog-wrapper";
import VideoBlogContainer from "../components/video-blog-container";
import styles from "./frame-component2.module.css";
const FrameComponent2 = () => {
  return (
    <div className={styles.trendingBlogsParent}>
      <div className={styles.component}>
        <div className={styles.trendingBlogs}>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <iframe
                src="https://www.youtube.com/embed/Ofsp905HFJo?si=bAZzOqrVNt5_nsXD?rel=0"
                title=""
                className={styles.groupChild}
                frameBorder="0" // Remove border
                allowFullScreen // Enable full-screen mode
              />
              {/* <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <div className={styles.rectangleContainer}>
                  <div className={styles.groupInner} />
                  <div className={styles.rectangleDiv} />
                </div>
              </div> */}
              {/* <VideoBlogWrapper
                propTop="293px"
                propLeft="0px"
                propLeft1="19px"
              /> */}
            </div>
            {/* <div className={styles.groupDiv}>
              <div className={styles.groupChild1} />
            </div> */}
          </div>
          <VideoBlogContainer playlistId="PLEd26MS72w4KI8xex7qn0KJ6pSDB8em6O" />
          {/* <VideoBlogContainer
            productIds="/rectangle-191@2x.png"
            propTop="205px"
            propLeft="804px"
          />
          <VideoBlogContainer
            productIds="/rectangle-192@2x.png"
            propTop="320px"
            propLeft="804px"
          /> */}
          <div className={styles.trending}>Trending</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
