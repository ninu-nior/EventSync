import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import Logo from "../../assets/logo_circle.jpg";

import "./Navbar.css";

export default function Navbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const userData = localStorage.getItem("user");
            setUser(userData);
        }, 5000);
        
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const logout = () => {
        localStorage.setItem("loginStatus", false);
        localStorage.removeItem("user");
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img src={Logo} alt="Logo" />
                </Link>

                {/* Navigation Menu */}
                <div className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/view-event">Events</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        {user !== "admin" && (
  <li>
    <Link to="/sponsorship-opportunities">Sponsorship Opportunities</Link>
  </li>
)}
                        {user === "admin" && <li><Link to="/create-event">Create Event</Link></li>}
                        {user === "admin" && <li><Link to="/get-sponsors">Sponser List</Link></li>}
                        {user === "admin" && <li><Link to="/looking-sponser">Sponser connect</Link></li>}

                    </ul>
                </div>

                {/* User Profile Dropdown */}
                {user && (
                    <div className="dropdown">
                        <button className="dropbtn">
                            <BiSolidUserCircle className="usericon" />
                            {user}
                        </button>
                        <div className="dropdown-content">
                            {user !== "admin" && <Link to="/edit-profile">Edit Profile</Link>}
                            <Link to="/booked-events">Booked Events</Link>
                            {user !== "admin" &&<Link to="/sponsorship-events">Sponsor Corner</Link>}

                            <Link to="/" onClick={logout}>Logout</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
