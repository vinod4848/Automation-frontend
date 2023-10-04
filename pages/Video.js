import VideoBlogWrapper from "../components/video-blog-wrapper";
import VideoBlogContainer from "../components/video-blog-container";
import styles from "./frame-component10.module.css";
const Video = () => {
  return (
    <div className={styles.interviewsParent}>
      <div className={styles.interviews}>
        <div className={styles.interviewsInner}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="/rectangle-181@2x.png"
            />
            <img className={styles.groupItem} alt="" src="/polygon-1.svg" />
            <div className={styles.rectangleGroup}>
              <div className={styles.groupInner} />
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.groupChild1} />
              </div>
            </div>
            <VideoBlogWrapper
              propTop="318.51px"
              propLeft="566px"
              propLeft1="48px"
            />
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.seeMore}>See More</div>
        </div>
        <div className={styles.groupParent}>
          <VideoBlogContainer
            productIds="/rectangle-1910@2x.png"
            propTop="0px"
            propLeft="0px"
          />
          <VideoBlogContainer
            productIds="/rectangle-1911@2x.png"
            propTop="115px"
            propLeft="0px"
          />
          <VideoBlogContainer
            productIds="/rectangle-1912@2x.png"
            propTop="230px"
            propLeft="0px"
          />
        </div>
        <div className={styles.interviews1}>Interviews</div>
      </div>
    </div>
  );
};

export default Video;
