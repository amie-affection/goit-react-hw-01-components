import React from "react";
import "./App.css";
import user from "./user";
import { Profile } from "./components/Profile/Profile";
import statisticalData from "./statistical.data";
import { Statistic } from "./components/Statistic/Statistic";
import friends from "./friends.json";
import FriendsList from "./components/FriendsList/FriendsList";
import transactions from "./transactions.json";
import { History } from "./components/History/History";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <History items={transactions} />
    </>
  );
}

export default App;
