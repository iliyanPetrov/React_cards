import styles from "./Cards.module.css";
import React from "react";
import { useState } from "react";
import Card from "../Card/Card";

export default function Cards() {
  const [users, setUsers] = useState([]);

  const getUsersInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => {
        setUsers([...data]);
      });
  };

  return (
    <div className={styles.cards}>
      <span>Hello from Content</span>
      <button onClick={getUsersInfo}>Show cards</button>
      <section className={styles.section_container}>
        {users.map((user) => {
          return <Card user={user} key={user.id} users={users} />;
        })}
      </section>
    </div>
  );
}
