import { useState } from "react";
import "./SponsorshipForm.css";

export default function SponsorshipForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        organizationName: "",
        email: "",
        phone: "",
        sponsorshipType: "",
        contributionDetails: "",
        sponsorshipBenefits: "",
        financialCommitment: "",
        additionalNotes: "",
        lookingToSponsor: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        // Add form submission logic here
    };

    return (
        <div className="sponsorship-form-container">
            <h2>Sponsorship Application</h2>
            <p>Please fill out the form below to express your interest in Sponsoring Events.</p>
            <form onSubmit={handleSubmit}>
                <label>Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </label>
                <br></br>
                <br></br>
                <label>Organization Name:
                    <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} required />
                </label>
                <br></br>
                <br></br>
                
                <label>Email Address:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br></br>
                <br></br>
                
                <label>Phone Number:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <br></br>
                <br></br>
                
                <label>Type of Sponsorship:
                    <select name="sponsorshipType" value={formData.sponsorshipType} onChange={handleChange} required>
                        <option value="">Select an option</option>
                        <option value="Financial">Financial</option>
                        <option value="Product/Service">Product/Service</option>
                        <option value="Media & Promotion">Media & Promotion</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <label>Details of Contribution:
                    <textarea name="contributionDetails" value={formData.contributionDetails} onChange={handleChange} required placeholder="Describe what you can provide as a sponsor." />
                </label>
                <br></br>
                <br></br>
                <label>Expected Benefits:
                    <textarea name="sponsorshipBenefits" value={formData.sponsorshipBenefits} onChange={handleChange} required placeholder="What benefits do you expect as a sponsor?" />
                </label>
                <br></br>
                <br></br>
                
                <label>Financial Commitment (if applicable, in INR):
                    <input type="number" name="financialCommitment" value={formData.financialCommitment} onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                
                <label>Additional Notes (optional):
                    <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Any additional information or requests." />
                </label>
                <br></br>
                <br></br>
                
                <label className="toggle-label">
                I am actively looking to sponsor
                    <input type="checkbox" name="lookingToSponsor" checked={formData.lookingToSponsor} onChange={handleChange} />
                    
                </label>
                <br></br>
                <br></br>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}
