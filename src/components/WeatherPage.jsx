import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";

const WeatherPage = () => {
  const fromTimestamp = Date.now(); // Example variable for the "from" timestamp
  const toTimestamp = new Date().getTime() - 48 * 60 * 60 * 1000; // Example variable for the "to" timestamp
  const panel = 3;
  const iframeSrc = `http://10.8.0.26:3000/d-solo/ab54aad0-2c7f-4306-91d2-40c9f33bfe2e/openweather-data?orgId=1&from=${fromTimestamp}&to=${toTimestamp}&panelId=${panel}`;
  const iframeSrcRain = `http://10.8.0.26:3000/d-solo/ab54aad0-2c7f-4306-91d2-40c9f33bfe2e/openweather-data?orgId=1&from=${fromTimestamp}&to=${toTimestamp}&panelId=5`;
  const test = `http://10.8.0.26:3000/d-solo/ab54aad0-2c7f-4306-91d2-40c9f33bfe2e/openweather-data?orgId=1&from=${fromTimestamp}&to=${toTimestamp}&panelId=6`;
  const cities = ["Victoria", "Loveland", "Libertyville"];

  // State to hold the selected city
  const [selectedCity, setSelectedCity] = useState("Victoria");

  const handleCityChange = (event) => {
    // Update the selected city when the dropdown value changes
    setSelectedCity(event.target.value);
  };

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Weather Data</h1>
          <iframe
            src={iframeSrc}
            width="450"
            height="200"
            frameBorder="0"
          ></iframe>
        </Card>
      </Container>

      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">TestPanel</h1>
          <iframe
            src={test + `&var-selector=${selectedCity}`}
            width="450"
            height="200"
            frameBorder="0"
          ></iframe>
          <div>
            <h4>Select City:</h4>
            <select value={selectedCity} onChange={handleCityChange}>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </Card>
      </Container>

      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">
            Pressure Temp Dew Pt and Humidity
          </h1>
          <iframe
            src={iframeSrcRain}
            width="450"
            height="200"
            frameBorder="0"
          ></iframe>
        </Card>
      </Container>
    </div>
  );
};

export default WeatherPage;
