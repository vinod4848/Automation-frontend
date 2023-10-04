import styles from "./frame-component7.module.css";
const FrameComponent7 = () => {
  return (
    <div className={styles.ctaParent}>
      <div className={styles.cta}>
        <div className={styles.ctaChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.subscribeNow} onClick={() => router.push(`/subscription/subscription`)} style={{cursor:"pointer"}}>Subscribe Now</b>
        </div>
        <div className={styles.magazineAd}>Magazine Ad</div>
        <div className={styles.magazineDetails}>Magazine Details</div>
        <div className={styles.rectangleGroup}>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-March-2023.pdf">
            <img
              className={styles.groupItem}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Mar-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Feb-2023.pdf">
            <img
              className={styles.groupInner}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Feb-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Jan-2023.pdf">
            <img
              className={styles.rectangleIcon}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/jan-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-December-2022.pdf">
            <img
              className={styles.groupChild1}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/December-2022.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-November-2022.pdf">
            <img
              className={styles.groupChild2}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/November-2022.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-October-2022.pdf">
            <img
              className={styles.groupChild3}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/October-2022.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
