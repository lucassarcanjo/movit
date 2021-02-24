import React from "react";

import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucassarcanjo.png" alt="Lucas Arcanjo" />
      <div>
        <strong>Lucas Arcanjo</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
