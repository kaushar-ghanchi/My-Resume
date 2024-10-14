import React from "react";
import styles from "./home-page.module.scss";
import { Link, useNavigate } from "react-router-dom";
export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>Kaushar Ghanchi</div>
      <div className={styles.summaryText}>
        <div onClick={(e) => console.log(e)}>
          At Evernorth Health Services, my role as a Software Engineer involves
          leveraging Agile methodologies to create impactful web applications
          that cater to the dynamic needs of the healthcare industry. Our team
          prioritizes efficient design and user-centric interfaces, utilizing a
          full stack approach with technologies like HTML, CSS, Angular, and
          Node.js to deliver solutions that improve user experience and
          streamline operations.
        </div>
        <div>
          Previously at CBRE, TX, I honed my skills in frontend development,
          mastering React Hooks and regularly contributing to the migration and
          enhancement of applications to keep pace with technological
          advancements. Our concerted efforts in application deployment,
          combined with a relentless pursuit of innovation, have solidified our
          reputation within the tech and healthcare sectors as a reliable and
          progressive force.
        </div>
      </div>
    </div>
  );
};

export default Home;
