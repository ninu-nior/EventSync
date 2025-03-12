import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SponsorshipEventsList.css';

const SponsorshipEventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/sponsorshipForm/needs-sponsorship')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error("Error fetching sponsorship events:", error);
            });
    }, []);

    return (
        <div className="sponsorship-events-list">
            <h1>Sponsor Events</h1>
            <br></br>
            <br></br>
            <br></br>
            {events.length === 0 ? (
                <p>No sponsorship events available.</p>
            ) : (
                <div className="events-grid">
                    {events.map((event) => (
                        <div key={event.id} className="event-item">
                            <h2>{event.eventName}</h2>
                            <h3>{event.collegeName}</h3>
                            <p><strong>Estimated Date:</strong> {event.eventDate}</p>
                            <p><strong>Sponsorship Type:</strong> {event.sponsorshipType}</p>
                            <p><strong>Benefits Offered:</strong> {event.sponsorshipBenefits}</p>
                            <p><strong>Financial Commitment:</strong> {event.financialCommitment}</p>
                            {event.contributionDetails && <p><strong>Details:</strong> {event.contributionDetails}</p>}
                            {event.additionalNotes && <p><strong>Additional Notes:</strong> {event.additionalNotes}</p>}
                            <br></br>
                            <p>Contact Details ☎️</p>
                            {event.email && <p><strong>Email:</strong> {event.email}</p>}
                            {event.phone && <p><strong>Phone:</strong> {event.phone}</p>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SponsorshipEventsList;
