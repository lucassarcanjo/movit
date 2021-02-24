import React, { useMemo } from "react";
import styles from "./ExperienceBar.module.css";

interface Props {
  minExperience?: number;
  maxExperience?: number;
  currentExperience: number;
}

const ExperienceBar: React.FC<Props> = ({
  minExperience = 0,
  maxExperience = 600,
  currentExperience,
}) => {
  const currentProgressBarWidth = useMemo(() => {
    const decimalValue = currentExperience / (maxExperience - minExperience);
    return Math.floor(decimalValue * 100);
  }, [currentExperience, maxExperience, minExperience]);

  return (
    <header className={styles.experienceBar}>
      <span>{minExperience} xp</span>
      <div>
        <div style={{ width: `${currentProgressBarWidth}%` }} />
        <span className={styles.currentExperience} style={{ left: "50%" }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{maxExperience} xp</span>
    </header>
  );
};

export default ExperienceBar;
