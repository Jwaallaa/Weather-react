import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [location, setLocation] = useState("Kanpur");
  const [Currweather, setCurrWeather] = useState({});
  const [error, setError] = useState(false); // New error state

  const fetchWeather = async () => {
    await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d51d954904657d413d926b0ab79b1d8b`)
      .then(response => {
        setCurrWeather(response.data);
        setError(false); // Reset error state on successful fetch
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError(true); // Set error state if the fetch fails
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  return (
    <>
      <Header setLocation={setLocation} />
      <Search setLocation={setLocation} />
      {error ? ( // Conditional rendering based on error state
        <div className="error-message">No city found</div>
      ) : (
        <Card Currweather={Currweather} location={location} setLocation={setLocation} />
      )}
    </>
  );
}

export default App;
