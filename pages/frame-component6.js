import { useRouter } from "next/router";
import styles from "./frame-component6.module.css";
const FrameComponent6 = () => {
  const router = useRouter();
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
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Sep-2023.pdf">
            <img
              className={styles.groupItem}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Sep-23.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Aug-2023.pdf">
            <img
              className={styles.groupInner}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Aug-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-July-2023.pdf">
            <img
              className={styles.rectangleIcon}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/July-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-June-2023.pdf">
            <img
              className={styles.groupChild1}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/June-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-May-2023.pdf">
            <img
              className={styles.groupChild2}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/May-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-April-2023.pdf">
            <img
              className={styles.groupChild3}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Apr-2023.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
