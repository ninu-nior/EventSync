import { useState, useEffect } from "react";

import Login from "../Login/Login";
import './Home.css';

export default function Home(props){  
    // localStorage.clear();
    const [isLoggedIn, setLoggedIn] = useState("false");

    useEffect(() => {
        setInterval(() => {
            const loginStatus = localStorage.getItem("loginStatus");
            setLoggedIn(loginStatus);
        }, [])
    }, 5000)

    if (!isLoggedIn || isLoggedIn === "false"){
        return(
            <div class="content">
                <div>
                <h1>EventSync</h1>
                    <p className="tagline">
                        <em> ‘ Simplify ’ your College Events </em>
                    </p>
                    <p className="about">
                    EventSync is a powerful, all-in-one event management and promotion platform designed specifically for colleges. Whether you’re a student looking for exciting events, a club seeking sponsorship, or a sponsor looking for the right opportunities, EventSync connects all stakeholders seamlessly.<br /><br/><br/><br /><br/>
                    <strong style={{ color: "rgb(243, 243, 114)", fontWeight: "bold" }}>Why Choose EventSync?</strong>
  <br /><br />
✅ Discover Events Easily – Explore events across colleges by category, location, or interest.<br/>
✅ Seamless Sponsorships – Connect clubs and sponsors efficiently through AI-powered matchmaking.<br/>
✅ Personalized Dashboard – Bookmark events, set reminders, and get personalized event recommendations.<br/>
✅ Live Interactions & Feedback – Engage with attendees through chatrooms and collect valuable feedback.<br/>
✅ Data-Driven Insights – Get detailed analytics to enhance future event planning.<br/>
✅ Inter-College Collaboration – Organize joint events and foster a culture of participation.<br/>

🚀 EventSync transforms college events into seamless, impactful experiences!<br/>

🔹 Start exploring now and be part of the next big event!<br/>
                    </p>
                </div>
                
                <Login/>
            </div>
        )

    }

    else{
        return(
            <div class = "content">
                <div>
                <h1>EventSync</h1>
                    <p className="tagline">
                        <em> ‘ Simplify ’ your College Events </em>
                    </p>
                    <p className="about">
                    EventSync is a powerful, all-in-one event management and promotion platform designed specifically for colleges. Whether you’re a student looking for exciting events, a club seeking sponsorship, or a sponsor looking for the right opportunities, EventSync connects all stakeholders seamlessly.<br /><br/><br/><br /><br />
                    <strong style={{ color: "rgb(243, 243, 114)", fontWeight: "bold" }}>Why Choose EventSync?</strong>
  <br /><br />
✅ Discover Events Easily – Explore events across colleges by category, location, or interest.<br/>
✅ Seamless Sponsorships – Connect clubs and sponsors efficiently through AI-powered matchmaking.<br/>
✅ Personalized Dashboard – Bookmark events, set reminders, and get personalized event recommendations.<br/>
✅ Live Interactions & Feedback – Engage with attendees through chatrooms and collect valuable feedback.<br/>
✅ Data-Driven Insights – Get detailed analytics to enhance future event planning.<br/>
✅ Inter-College Collaboration – Organize joint events and foster a culture of participation.<br/>

🚀 EventSync transforms college events into seamless, impactful experiences!<br/>

🔹 Start exploring now and be part of the next big event!<br/>
                    </p>
                </div>
            </div>
            
        )
    }
    
}