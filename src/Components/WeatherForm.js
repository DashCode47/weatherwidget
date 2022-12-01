import React, { useState } from "react";
import styles from "./weatherForm.module.css";
const WeatherForm = ({ onChangecity }) => {
  const [city, setCity] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    if (value !== "") setCity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangecity(city);
    setCity("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={require("../assets/logo.png")} className={styles.logo} />
        <h2 className={styles.h2}>App del clima Kruger</h2>
      </div>

      <input
        type={"text"}
        onChange={onChange}
        className={styles.input}
        value={city}
      />
    </form>
  );
};

export default WeatherForm;
