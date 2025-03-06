import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace these with your own values
  const API_KEY = 'YOUR_GOOGLE_API_KEY';
  const CALENDAR_ID = 'YOUR_CALENDAR_ID@group.calendar.google.com'; // Public calendar ID
  const API_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            timeMin: new Date().toISOString(), // Only future events
            singleEvents: true,
            orderBy: 'startTime',
            maxResults: 10, // Limit to 10 events
          },
        });
        setEvents(response.data.items);
        setLoading(false);
      } catch (err) {
        setError('Failed to load calendar events');
        setLoading(false);
      }
    };

    fetchEvents();
  }, [API_URL]);

  if (loading) return <div>Loading calendar...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="calendar-container">
      <h1>Upcoming Events</h1>
      {events.length === 0 ? (
        <p>No upcoming events found.</p>
      ) : (
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id} className="event-item">
              <h2>{event.summary}</h2>
              <p>
                {new Date(event.start.dateTime || event.start.date).toLocaleString()} 
                {event.end && ' - ' + new Date(event.end.dateTime || event.end.date).toLocaleString()}
              </p>
              {event.description && <p>{event.description}</p>}
              {event.location && <p>Location: {event.location}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Calendar;