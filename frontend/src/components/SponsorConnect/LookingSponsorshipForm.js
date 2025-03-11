import { useState } from "react";
import "./lookingsponsor.css";

export default function LookingSponsorshipForm() {
    const [formData, setFormData] = useState({
        eventName: "",
        collegeName: "",
        eventDate: "",
        clubname: "",
        email: "",
        phone: "",
        sponsorshipType: "",
        contributionDetails: "",
        sponsorshipBenefits: "",
        financialCommitment: "",
        additionalNotes: "",
        lookingForSponsors: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // If the financialCommitment is empty, remove it from the formData before sending it
        // const formDataToSend = {
        //     ...formData,
        //     financialCommitment: formData.financialCommitment === "" ? undefined : formData.financialCommitment
        // };
    
        try {
            const response = await fetch("http://localhost:4000/api/sponsorshipForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Send the updated form data
            });
    
            if (response.ok) {
                alert("Application submitted successfully!");
                setFormData({
                    eventName: "",
                    collegeName: "",
                    eventDate: "",
                    clubname: "",
                    email: "",
                    phone: "",
                    sponsorshipType: "",
                    contributionDetails: "",
                    sponsorshipBenefits: "",
                    financialCommitment: "",
                    additionalNotes: "",
                    lookingForSponsors: false,
                });
            } else {
                alert("Failed to submit application");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred while submitting the application");
        }
    };
    
    return (
        <div className="sponsorship-form-container">
            <h2>College Event Sponsorship Application</h2>
            <p>Fill out this form if your college event is looking for sponsorship.</p>
            
            <form onSubmit={handleSubmit}>
                {/* Event Details */}
                <label>Event Name:
                    <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
                </label>
                <br /><br />
                
                <label>College Name:
                    <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
                </label>
                <br /><br />

                <label>Event Date:
                    <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                </label>
                <br /><br />

                {/* Organizer Details */}
                <label>Club Name:
                    <input type="text" name="clubname" value={formData.clubname} onChange={handleChange} required />
                </label>
                <br /><br />
                
                <label>Email Address:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br /><br />
                
                <label>Phone Number:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <br /><br />
                
                {/* Sponsorship Details */}
                <label>Type of Sponsorship Required:
                    <select name="sponsorshipType" value={formData.sponsorshipType} onChange={handleChange} required>
                        <option value="">Select an option</option>
                        <option value="Financial">Financial</option>
                        <option value="Product/Service">Product/Service</option>
                        <option value="Media & Promotion">Media & Promotion</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br /><br />

                <label>Details of Contribution Needed:
                    <textarea name="contributionDetails" value={formData.contributionDetails} onChange={handleChange} required placeholder="Describe the type of sponsorship your event needs." />
                </label>
                <br /><br />

                <label>Benefits for the Sponsor:
                    <textarea name="sponsorshipBenefits" value={formData.sponsorshipBenefits} onChange={handleChange} required placeholder="What exposure or benefits will the sponsor receive?" />
                </label>
                <br /><br />

                <label>Expected Financial Support (if applicable, in INR):
                    <input type="number" name="financialCommitment" value={formData.financialCommitment} onChange={handleChange} />
                </label>
                <br /><br />

                <label>Additional Notes (optional):
                    <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Any additional details or specific sponsor requirements." />
                </label>
                <br /><br />

                <label className="toggle-label">
                    This event is actively looking for sponsors
                    <input type="checkbox" name="lookingForSponsors" checked={formData.lookingForSponsors} onChange={handleChange} />
                </label>
                <br /><br />

                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}