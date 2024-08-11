import React, { useState } from "react";
import "../Weather.css";
import WeatherMap from "./Demo";

function WeatherApp() {
    const [searchInput, setSearchInput] = useState("");
    const [weatherData, setWeatherData] = useState({
        name: "New York", // Dummy city name
        windSpeed: 10, // Dummy wind speed
        humidity: 60, // Dummy humidity
        feelsLike: 25, // Dummy "feels like" temperature
        temperature: 22, // Dummy temperature
    });
    const [recentSearches, setRecentSearches] = useState([]);

    const checkWeather = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=555bb10fd3d3daed71c1ea46770b01aa`);
        const data = await response.json();
        setWeatherData({
            name: data.name,
            windSpeed: data.wind.speed,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            temperature: Math.round(data.main.temp),
        });
    };

    const handleSearchClick = () => {
        if (searchInput) {
            checkWeather(searchInput);
            updateRecentSearch(searchInput);
        }
    };

    const updateRecentSearch = (city) => {
        setRecentSearches((prevSearches) => [...prevSearches, city]);
    };

    const handleRecentSearchClick = (city) => {
        setSearchInput(city);
        checkWeather(city);
    };

    return (
        <div className="currentWeather">
            <div className="content">
                <div className="contentBox">
                    <span className="title">
                        Current Weather
                    </span>
                    <span className="desc">Get Current Weather Status</span>
                </div>
                <div className="weather">
                    <div className="searchbar">
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Enter City"
                            className="search"
                        />
                        <span id="search_btn" className="material-symbols-outlined" onClick={handleSearchClick}>
                            search
                        </span>
                    </div>
                    <div id="recentSearch">
                        {recentSearches.map((city, index) => (
                            <span key={index} onClick={() => handleRecentSearchClick(city)}>
                                {city}
                            </span>
                        ))}
                    </div>
                    <div className="weather_content">
                        <div className="city">
                            <span className="material-symbols-outlined" id="cloud">
                                cloud
                            </span>
                            <span id="cel">{weatherData.temperature} C</span>
                            <span id="feels_cel" style={{ fontSize: "12px", color: "rgb(45, 45, 45)" }}>
                                Feels Like {weatherData.feelsLike} C
                            </span>
                            <span id="cityname">{weatherData.name}</span>
                        </div>
                        <div className="others">
                            <div className="air">
                                <span id="icon" className="material-symbols-outlined" style={{ textAlign: "center" }}>
                                    airwave
                                </span>
                                <span id="humidity">{weatherData.humidity}<br />Humidity</span>
                            </div>
                            <div className="speed">
                                <span id="icon" className="material-symbols-outlined" style={{ textAlign: "center" }}>
                                    speed
                                </span>
                                <span id="speed">{weatherData.windSpeed} km/hr<br />Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;