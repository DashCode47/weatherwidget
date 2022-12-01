import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from "./weatherApp.module.css";
import Loading from "./Loading";
const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location?.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "london") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);
      setWeather(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangecity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
};

export default WeatherApp;
