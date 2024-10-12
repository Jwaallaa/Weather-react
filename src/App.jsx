import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [location, setLocation] = useState("");
  const [Currweather, setCurrWeather] = useState({});
  const [error, setError] = useState(false); // New error state

  const fetchWeather = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d51d954904657d413d926b0ab79b1d8b`
      )
      .then((response) => {
        setCurrWeather(response.data);
        setError(false); // Reset error state on successful fetch
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError(true); // Set error state if the fetch fails
      });
  };

  let geofetch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        await axios
          .get(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=c1a34982c5333ac1d95f9e413adbe40b`
          )
          .then((response) => {
            let cityname = response.data[0]?.name;

            setLocation(cityname);
          })
          .catch((error) => {
            console.error("Error fetching location data:", error);
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]);

  useEffect(() => {
    if (!location) {
      geofetch();
    }
  }, []);

  return (
    <>
      <Header setLocation={setLocation} />
      <Search setLocation={setLocation} />
      {error ? ( // Conditional rendering based on error state
        <div className="error-message">No city found</div>
      ) : location == "" ? (
        <div className="loading-message">Loading location...</div>
      ) : (
        <Card
          Currweather={Currweather}
          location={location}
          setLocation={setLocation}
        />
      )}
    </>
  );
}

export default App;

// https://api.openweathermap.org/geo/1.0/reverse?lat=41.6098&lon=-0.1180&limit=5&appid=c1a34982c5333ac1d95f9e413adbe40b
