const mongoose = require("mongoose");

const sponsorshipSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    organizationName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    sponsorshipType: { type: String, required: true },
    contributionDetails: { type: String, required: true },
    sponsorshipBenefits: { type: String, required: true },
    financialCommitment: { type: Number },
    additionalNotes: { type: String },
    lookingToSponsor: { type: Boolean, default: false },
}, { timestamps: true });

module.exports =  mongoose.model("Sponsorship", sponsorshipSchema);

