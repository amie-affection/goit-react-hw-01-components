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
          {items.map((item) => (
            <Transactions key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const Transactions = ({ data: { type, amount, currency } }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
