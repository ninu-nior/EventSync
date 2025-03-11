import { useEffect, useState } from "react";
import Axios from "axios";
import "./sponsorevents.css"
import EventCard from "../Event/EventCard";

export default function SponsorshipEventsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        Axios.get("https://eventhub-t514.onrender.com/eventRoute/sponsorship-events")
        .then((res) => {
            if (res.status === 200 && res.data) {
                setEvents(res.data.sponsorshipEvents);  // Ensure API returns sponsorship events
            } else {
                Promise.reject();
            }
        })
        .catch((err) => console.error("Error fetching sponsorship events:", err));
    }, []); // Added dependency array to avoid infinite calls

    const SponsorshipItems = () => {
        return events.map((event, index) => (
            <EventCard key={index} obj={event} action="sponsor" />
        ));
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Events Looking for Sponsorship
            </h2>
            <div className="cardContainer">
                {events.length > 0 ? SponsorshipItems() : <p className="no-events">No events available.</p>                }
            </div>
        </div>
    );
}