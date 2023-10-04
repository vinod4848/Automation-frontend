import { useMemo } from "react";
import styles from "./blog-wrapper.module.css";
const BlogWrapper = ({ propTop, propLeft }) => {
  const groupDiv3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.rectangleParent} style={groupDiv3Style}>
      <div className={styles.groupChild} />
      <div className={styles.blogTitle}>Blog Title</div>
      <div className={styles.blogSubtitle}>Blog subtitle</div>
    </div>
  );
};

export default BlogWrapper;
