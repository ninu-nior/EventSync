import Card from "react-bootstrap/Card";
import "./Sponsors.css";

const SponsorCard = ({ sponsor }) => {
  const {
    fullName,
    organizationName,
    email,
    phone,
    sponsorshipType,
    contributionDetails,
    sponsorshipBenefits,
    financialCommitment,
    additionalNotes,
  } = sponsor;

  return (
    <Card className="eventCard">
      <Card.Body>
        <Card.Title className="title"><strong>{organizationName}</strong></Card.Title>
        <Card.Subtitle className="title">{fullName}</Card.Subtitle>
        <Card.Text>
          <strong>Type:</strong> {sponsorshipType} <br />
          <strong>Contribution:</strong> {contributionDetails} <br />
          <strong>Benefits:</strong> {sponsorshipBenefits} <br />
          <strong>Financial Commitment:</strong> ${financialCommitment || "N/A"} <br />
          <strong>Additional Notes:</strong> {additionalNotes || "None"} <br />
          <strong>Email:</strong> {email} <br />
          <strong>Phone:</strong> {phone} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SponsorCard;