import { useMemo } from "react";
import styles from "./blog-form-container.module.css";
const BlogFormContainer = ({ coordinates, propLeft, propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <img className={styles.groupChild} alt="" src={coordinates} />
      <div className={styles.blogTitle}>Blog Title</div>
      <div className={styles.blogSubtitle}>Blog subtitle</div>
    </div>
  );
};

export default BlogFormContainer;
