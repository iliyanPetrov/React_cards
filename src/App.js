import React from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className={styles.main_body}>
      <header className={styles.main_header}> HEADER UP HERE </header>
      <main className={styles.main_content}>
        <Cards />
      </main>
      <footer className={styles.main_footer}>0898481684</footer>
    </div>
  );
}

export default App;
