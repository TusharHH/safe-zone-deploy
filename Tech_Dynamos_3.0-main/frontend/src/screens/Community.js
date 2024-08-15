import React, { useState } from 'react';
import axios from 'axios';

export default function Community() {
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() && city) {
      const userName = localStorage.getItem('name'); 
  
      try {
        const response = await axios.post('http://localhost:5000/api/community/create', {
          location,
          city,
          message: {
            userName,
            message
          }
        });
  
        console.log("Message sent:", response.data);
        setMessage('');
        fetchMessagesForCity(city);
  
      } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
      }
    }
  };
  

  const handleChooseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          const cityName = await reverseGeocode(latitude, longitude);
          setCity(cityName);
          fetchMessagesForCity(cityName);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      return response.data.address.city || 'Unknown City';
    } catch (error) {
      console.error('Error during reverse geocoding:', error);
      return 'Unknown City';
    }
  };

  const fetchMessagesForCity = async (cityName) => {
    try {
      const response = await axios.get('http://localhost:5000/api/community/find');
      const filteredMessages = response.data.message.filter(msg => msg.city === cityName);
      setMessages(filteredMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className="container border bg-white rounded shadow-sm mt-4 p-3">
      <style>{`
        .chat-area {
          max-height: 300px; 
          overflow-y: scroll;
          padding: 15px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          background-color: #f8f9fa;
          border-radius: 8px;
        }
        .chat-area::-webkit-scrollbar {
          width: 8px;
        }
        .chat-area::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 10px;
        }
        .send-section {
          border-top: 1px solid #ddd;
          padding: 10px;
          background-color: #ffffff;
        }
        .send-section .form-control {
          flex-grow: 1;
          border-radius: 20px;
        }
        .send-section .btn-success {
          border-radius: 20px;
        }
        .btn-custom {
          border: 2px solid #0d6efd; 
          background-color: #e9ecef; 
          color: #0d6efd; 
          border-radius: 20px;
          padding: 5px 15px; 
        }
        .btn-custom:hover {
          background-color: #f8f9fa;
        }
      `}</style>

      <div className="row mx-2 mb-4 p-3 d-flex flex-row align-items-center border rounded bg-light shadow-sm">
        <div className="col-6">
          <h3 className="mb-0">Chat By Location</h3>
          <span><p className="text-muted small mb-0">Powered by SafeZone</p></span>
          {city && <p className="text-muted small mb-0">Chatting in: {city}</p>}
        </div>
        <div className="col-6 d-flex justify-content-end">
          <button className="btn btn-custom shadow-sm" onClick={handleChooseLocation}>
            Choose Location
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg._id}>
              <p><strong>{msg.message.userName}:</strong> {msg.message.message}</p>
              <small className="text-muted">{new Date(msg.createdAt).toLocaleTimeString()}</small>
              <hr />
            </div>
          ))
        ) : (
          <p className="text-muted">No messages yet. Be the first to say something!</p>
        )}
      </div>

      {/* Send Message Section */}
      <div className="row mx-auto d-flex flex-row send-section">
        <form onSubmit={handleSubmit} className="d-flex w-100">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Enter your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={!city} // Disable input if city is not selected
          />
          <button type="submit" className="btn btn-success ms-2 shadow-sm" disabled={!city}>
            <i className="bi bi-send"></i> Send
          </button>
        </form>
      </div>
    </div>
  );
}
