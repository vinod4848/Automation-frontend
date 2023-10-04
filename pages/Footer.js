import { useRouter } from "next/router";
import styles from "./frame-component11.module.css";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerItem}>
          <img className={styles.logoFull1} alt="" src="/logo-full-1@2x.png" />

          <h2 className={styles.headertext}>About Us</h2>
          <div className={styles.desc}>
            Industrial Automation is a monthly magazine published by IED
            Communications since 1980, catering to the factory and process
            automation needs of the industry
          </div>
        </div>
        <div className={styles.footerItem}>
          <h2 className={styles.quicklinks}>Quick Links</h2>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/subscription/subscription`)}
          >
            Buy Subscription
          </p>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/contact-us`)}
          >
            Contact Us
          </p>
        </div>
        <div className={styles.footerItem}>
          <h2 className={styles.about}>Advertisement</h2>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/category/products`)}
          >
            Products
          </p>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/category/interview`)}
          >
            Interviews
          </p>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/category/news`)}
          >
            News
          </p>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/category/article`)}
          >
            Aricles
          </p>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/category/casestudy`)}
          >
            Case Study
          </p>
        </div>
        <div className={styles.footerItem}>
          <h2 className={styles.company}>Company</h2>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/about`)}
          >
            About Us
          </p>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/privacypolicy`)}
          >
            Privacy Policy
          </p>
          <p
            className={styles.buySubscription}
            onClick={() => router.push(`/termsandconditions`)}
          >
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
