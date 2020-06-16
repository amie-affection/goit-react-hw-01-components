import React from "react";
import styles from "./Statistic.module.css";

export const Statistic = ({ title, stats }) => {
  return (
    <>
      <section className={styles.stats}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statList}>
          <li className={styles.item}>
            <span className={styles.label}>.docx</span>
            <span className={styles.percentage}>%</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>.mp3</span>
            <span className={styles.percentage}>14%</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>.pdf</span>
            <span className={styles.percentage}>41%</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>.mp4</span>
            <span className={styles.percentage}>12%</span>
          </li>
        </ul>
      </section>
    </>
  );
};
