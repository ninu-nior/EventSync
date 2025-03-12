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
          <strong>Sponsorship type:</strong> {sponsorshipType} <br />
          <br></br>
          <strong>Contribution:</strong> {contributionDetails} <br />
          <strong>Expected Benefits Upto:</strong> {sponsorshipBenefits} <br />
          <strong>Financial Commitment Upto:</strong> {financialCommitment || "N/A"}INR <br />
          <strong>Additional Notes:</strong> {additionalNotes || "None"} <br />
          <br></br>
          <p>Contact Details☎️</p>
          <strong></strong> {email} <br />
          <strong>Phone:</strong> {phone} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SponsorCard;
