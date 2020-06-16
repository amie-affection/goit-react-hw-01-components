import React from "react";
import styles from "./Statistic.module.css";

export const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.stats}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map((stat) => (
          <StatisticItem key={stat.id} data={stat} />
        ))}
      </ul>
    </section>
  );
};

const StatisticItem = ({ data: { label, percentage } }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};
