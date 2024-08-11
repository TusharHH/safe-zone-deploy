import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Leaflet for maps
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const API_KEY = 'f5128cadeb4b4d8bb9f191705241008'; 

export default function WeatherMap() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const locations = [
      { name: 'Mumbai', lat: 19.076, lon: 72.8777 },
      { name: 'Delhi', lat: 28.7041, lon: 77.1025 },
      { name: 'Bangalore', lat: 12.9716, lon: 77.5946 },
      { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
      { name: 'Kolkata', lat: 22.5726, lon: 88.3639 },
    ];

    const fetchWeatherData = async () => {
      try {
        const responses = await Promise.all(
          locations.map((location) =>
            axios.get(
              `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.lat},${location.lon}`
            )
          )
        );

        const data = responses.map((response, index) => ({
          ...locations[index],
          weather: response.data.current,
        }));

        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {weatherData.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lon]}
          icon={L.icon({
            iconUrl: location.weather.condition.icon,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
          })}
        >
          <Popup>
            <strong>{location.name}</strong><br />
            Temperature: {location.weather.temp_c}°C<br />
            Condition: {location.weather.condition.text}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
