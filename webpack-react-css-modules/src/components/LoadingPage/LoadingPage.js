import React from "react";

import loaderImage from "../../assets/images/loader.gif";
import styles from "./LoadingPage.module.scss";

const LoadingPage = () => (
  <div className={styles.loader}>
    <img
      className={styles.loaderImage}
      src={loaderImage}
      alt="Loader animation"
    ></img>
  </div>
);

export default LoadingPage;
