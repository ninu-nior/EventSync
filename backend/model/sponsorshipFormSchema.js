const mongoose = require("mongoose");

const sponsorshipFormSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true

  },
  collegeName: {
    type: String,
    required: true

  },
  eventDate: {
    type: Date, // using Date type instead of string
    required: true
  },
  clubName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  sponsorshipType: {
    type: String,
    required: true,
    enum: ["Financial", "Product/Service", "Media & Promotion", "Other"]
  },
  contributionDetails: {
    type: String,
    required: true
  },
  sponsorshipBenefits: {
    type: String,
    required: true
  },
  financialCommitment: {
    type: Number,
    required: false
  },
  additionalNotes: {
    type: String,
    required: false
  },
  lookingForSponsors: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("SponsorshipForm", sponsorshipFormSchema);
