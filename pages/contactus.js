import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../components/Banner";
import styles from "./contact.module.css"; // Import your CSS module
const contactus = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className={styles["contact-us-container"]}>
        <h1 className={styles["h1-column"]}>We're easily reachable!</h1>
        <h4 className={styles["h4-column"]}>
          Just write to the relevant department and you will hear back from us
          asap.
        </h4>
        <div className={styles["contact-columns"]}>
          <div className={styles["contact-column"]}>
            <h2 className={styles["h2-column"]}>Publisher & Editor</h2>
            <div className={styles["input-container"]}>
              <div className={styles["display-field"]}>Dr. Arokiaswamy</div>
              <div className={styles["display-field"]}>
                <a href="mailto:arokiaswamy@industrialautomationindia.in">
                  arokiaswamy@industrialautomationindia.in
                </a>
              </div>
            </div>
          </div>
          <div className={styles["contact-column"]}>
            <h2 className={styles["h2-column"]}>International Editor</h2>
            <div className={styles["input-container"]}>
              <div className={styles["display-field"]}>Bridget Joseph</div>
              <div className={styles["display-field"]}>
                <a href="mailto:jyothi.joseph@industrialautomationindia.in">
                  jyothi.joseph@industrialautomationindia.in
                </a>
              </div>
            </div>
          </div>
          <div className={styles["contact-column"]}>
            <h2 className={styles["h2-column"]}>Editor</h2>
            <div className={styles["input-container"]}>
              <div className={styles["display-field"]}>Mr. Milton D’Silva</div>
              <div className={styles["display-field"]}>
                <a href="mailto:milton@industrialautomationindia.in">
                  milton@industrialautomationindia.in
                </a>
              </div>
            </div>
          </div>
          <div className={styles["contact-column"]}>
            <h2 className={styles["h2-column"]}>Strategic developments</h2>
            <div className={styles["input-container"]}>
              <div className={styles["display-field"]}>Benedicta Chettiar</div>
              <div className={styles["display-field"]}>
                <a href="mailto:beni@industrialautomationindia.in">
                  beni@industrialautomationindia.in
                </a>
              </div>
            </div>
          </div>
          <div className={styles["contact-column"]}>
            <h2 className={styles["h2-column"]}>Advertisements</h2>
            <div className={styles["input-container"]}>
              <div className={styles["display-field"]}>
                <a href="mailto:sales@industrialautomationindia.in">
                  sales@industrialautomationindia.in
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Address Container */}
        <h1 className={styles["h1-column"]}>Submit your query.</h1>
        <h4 className={styles["h4-column"]}>
          You can visit our office and we can discuss your query or drop us a
          message.
        </h4>
        <div className={styles["formContainer"]}>
          <div className={styles["addressContainer"]}>
            <h2 className={styles["h2-column"]}>Our Address</h2>
            <div className={styles["address"]}>
              <h5 className={styles["h5-column"]}>Regd Office:</h5>
              <p>IED Communications Limited</p>
              <p>64, Empire Building D N Road,Fort,</p>
              <p>Mumbai 400001</p>
            </div>
            <div className={styles["address"]}>
              <h5 className={styles["h5-column"]}>Magazine HQ:</h5>
              <p>243, Shiv Shakti Industrial Estate,</p>
              <p>Andheri Kurla Road,Opp Mittal Estate,</p>
              <p>Andheri (E) Mumbai 400059</p>
              <p>Whatsapp Only - +91-9867223530</p>
            </div>
            <div className={styles["address"]}>
              <h5 className={styles["h5-column"]}>Printing & Dispatch:</h5>
              <p>63, Shiv Shakti Industrial Estate,</p>
              <p>Andheri Kurla Road,Opp Mittal Estate,</p>
              <p>Andheri (E) Mumbai 400059</p>
            </div>
          </div>
          {/* Contact Us Form */}
          <div className={styles["contactForm"]}>
            <h2 className={styles["h2-column"]}>Contact Us</h2>
            <form style={{ width: "400px" }}>
              <div className={styles["form-field"]}>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles["form-field"]}>
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles["form-field"]}>
                <input type="text" placeholder="Subject" />
              </div>
              <div className={styles["form-field"]}>
                <input type="tel" placeholder="Phone number" />
              </div>
              <div className={styles["form-field"]}>
                <textarea rows="4" placeholder="Message"></textarea>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit" className={styles["submit-btn"]}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles["google-map-container"]}>
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?q=andherik&key=AIzaSyBQgI6YCkvOvAUGC3D65wZQmjVEMORcO74`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactus;
