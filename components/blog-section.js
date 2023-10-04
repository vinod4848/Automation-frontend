import styles from "./blog-section.module.css";
const BlogSection = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupWrapper}>
        <div className={styles.groupWrapper}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.blogTitle}>Blog Title</div>
          <div className={styles.blogSubtitle}>Blog subtitle</div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupChild} />
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          <div className={styles.blogTitle}>Blog Title</div>
          <div className={styles.blogSubtitle}>Blog subtitle</div>
        </div>
      </div>
      <div className={styles.groupFrame}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupChild} />
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.blogTitle}>Blog Title</div>
          <div className={styles.blogSubtitle}>Blog subtitle</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupChild} />
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
          <div className={styles.blogTitle}>Blog Title</div>
          <div className={styles.blogSubtitle}>Blog subtitle</div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
