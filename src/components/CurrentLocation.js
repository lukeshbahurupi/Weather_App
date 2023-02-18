import React from "react";
import "../css/CurrentLocation.css";
import { useGeolocated } from "react-geolocated";
import { Button } from "semantic-ui-react";
import API_KEY from "../config";
const CurrentLocation = (props) => {
  //   console.log(props.state);
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  function callWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`;
    fetch(url)
      //   .then(handleErrors)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          main: data.main,
          wind: data.wind,
          humidity: data.main.humidity,
          wind_direction: data.wind.deg,
          pressure: data.main.pressure,
          sunrise: data.sys.sunrise,
          visibility: data.visibility,
          sunset: data.sys.sunset,
        };
        props.updateWeatherData({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: "",
        });
      })
      .catch((error) => {
        // If an error is catch, it's sent to SearchBar as props
        // props.setState({ errorMessage: error.message });
        alert(`${error.message}`);
      });
  }
  return (
    <div className="button">
      {/* <div className="icon"> */}
      <Button
        className="circular ui grey icon button "
        onClick={() => {
          callWeatherData();
        }}
      >
        <i class="icon crosshairs"></i>
      </Button>
      {/* </div> */}

      {/* <p>latitude: {coords.latitude}</p>
      <p>longitude: {coords.longitude}</p> */}
    </div>
  );
};

export default CurrentLocation;
