import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';  // Import Leaflet
import axios from 'axios';  // Import Axios for HTTP requests
import 'leaflet/dist/leaflet.css';
import Demo from "../components/Demo";

// Define a custom icon
const customIcon = new L.Icon({
  iconUrl: 'https://example.com/path-to-your-custom-icon.png',  // Replace with the URL of your custom icon
  iconSize: [32, 32],  // Size of the icon
  iconAnchor: [16, 32],  // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32]  // Point from which the popup should open relative to the iconAnchor
});

export default function Emergency() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null
  });
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the location when the component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await axios.get('https://newsapi.org/v2/everything', {
  //         params: {
  //           q: 'disaster earthquake floods',
  //           language: 'en',
  //           sortBy: 'publishedAt',
  //           apiKey: 'a376e8c00e7e4541973bab791d4305c1'  // Your News API key
  //         }
  //       });
  //       setArticles(response.data.articles.slice(0, 5));
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  return (
    <>
      <div className="row m-2 mt-3 flex-grow-1">
        <div className="fw-bold text-center" style={{ fontSize: "35px" }}>Know What's Happening in Your Area:</div>
      </div>
      <br />
      {
        location.latitude && location.longitude ? (
          <MapContainer center={[location.latitude, location.longitude]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.latitude, location.longitude]} icon={customIcon}>
              <Popup>
                Your current location.<br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p>Fetching your location...</p>
        )
      }
      <br />
      <br />
      <br />
      <br />
      {/* <div style={{ margin: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Disaster News</h2>
        {loading ? (
          <div style={{ textAlign: 'center' }}>Loading news...</div>
        ) : error ? (
          <div style={{ textAlign: 'center', color: 'red' }}>Error: {error.message}</div>
        ) : (
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {articles.map((article, index) => (
              <li key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1a73e8' }}>
                  <h5 style={{ margin: '0' }}>{article.title}</h5>
                </a>
                <p style={{ margin: '10px 0' }}>{article.description}</p>
                <small style={{ color: '#888' }}>Published at: {new Date(article.publishedAt).toLocaleDateString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div> */}
      <Demo/>
    </>
  );
}
