import React from "react";
import styles from "../History/History.module.css";

export const History = ({ items }) => {
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead className={styles.headTable}>
          <tr className={styles.headItem}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
