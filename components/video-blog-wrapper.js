import { useMemo } from "react";
import styles from "./video-blog-wrapper.module.css";
const VideoBlogWrapper = ({ propTop, propLeft, propLeft1 }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const videoBlogTitleStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.groupChild} />
      <div className={styles.videoBlogTitle} style={videoBlogTitleStyle}>
        Video Blog Title
      </div>
      <div className={styles.videoBlogSubtitle}>Video Blog subtitle</div>
    </div>
  );
};

export default VideoBlogWrapper;
