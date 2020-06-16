import React from "react";
import styles from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendsListItem key={friend.id} data={friend} />
      ))}
    </ul>
  );
};

const FriendsListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusIsActive : styles.status}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendsList;
