import React from "react";
import styles from "./Card.module.css";
import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Card = ({ user, users }) => {
  const [icon, setIcon] = useState(["inline", "none"]);
  const handleFav = (id) => {
    if (icon[0] === "inline") {
      setIcon(["none", "inline"]);
      console.log(id);
    } else {
      setIcon(["inline", "none"]);
      console.log(id);
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.thumbnail}>
        <img src={user.thumbnailUrl} alt="not found" />
      </div>
      {user.title.length <= 35 ? (
        <h3>{user.title}</h3>
      ) : (
        <h3>{`${user.title.slice(0, 44)}...`}</h3>
      )}

      <img src={user.url} alt="not found" />
      <p>
        <button onClick={() => handleFav(user.id)}>
          Add to favorites
          <MdFavoriteBorder
            style={{ display: icon[0] }}
            className={styles.icon}
          />
          <MdFavorite style={{ display: icon[1] }} className={styles.icon} />
        </button>
      </p>
    </div>
  );
};

export default Card;
