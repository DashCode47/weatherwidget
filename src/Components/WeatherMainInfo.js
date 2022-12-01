import React from "react";
import styles from "./weatherMainInfo.module.css";
const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>
        {weather?.location?.name || "No existe :("}
      </div>
      <div className={styles.country}>{weather?.location?.country || ""}</div>
      <div className={styles.row}>
        <div>
          {weather?.current?.condition?.icon && (
            <img
              src={
                `http:${weather?.current?.condition?.icon}` ||
                require("../assets/question.png")
              }
              width="75"
              alt={weather?.current?.condition?.text}
            />
          )}
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current?.condition?.text}
          </div>
          {weather?.current?.temp_c && (
            <div className={styles.current}>{weather?.current?.temp_c}C</div>
          )}
        </div>
        {!weather?.location?.lon && (
          <img
            src={require("../assets/question.png")}
            width="75"
            alt={weather?.current?.condition?.text}
          />
        )}
        {weather?.location?.lon && (
          <iframe
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d123192.69976337068!2d${weather?.location?.lon}2!3d${weather?.location?.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sru!4v1669887075354!5m2!1ses-419!2sru`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default WeatherMainInfo;
