const express = require("express");
const mongoose = require("mongoose");
const eventRoute = require("./controller/eventRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/emsdb");
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/eventRoute', eventRoute);
// Import the Sponsorship model
const Sponsorship = require("./model/sponsorshipSchema"); // Adjust the path if necessary
const SponsorshipForm = require("./model/sponsorshipFormSchema.js");
// Sponsorship schema and model
// const sponsorshipSchema = new mongoose.Schema({
//     fullName: String,
//     organizationName: String,
//     email: String,
//     phone: String,
//     sponsorshipType: String,
//     contributionDetails: String,
//     sponsorshipBenefits: String,
//     financialCommitment: Number,
//     additionalNotes: String,
//     lookingToSponsor: Boolean,
// });

// const Sponsorship = mongoose.model("Sponsorship", sponsorshipSchema);

// Sponsorship form submission route
app.post("/api/sponsorship", async (req, res) => {
    try {
        const newSponsor = new Sponsorship(req.body);
        await newSponsor.save();
        res.status(201).send("Sponsorship application submitted successfully");
    } catch (error) {
        console.error("Error saving sponsorship:", error);
        res.status(500).send("Error submitting application");
    }
});
app.post("/api/sponsorshipForm", async (req, res) => {
    try {
        const newSponsorForm = new SponsorshipForm(req.body);
        await newSponsorForm.save();
        res.status(201).send("Sponsorship Request submitted successfully");
    } catch (error) {
        console.error("Error saving sponsorship:", error);
        res.status(500).send("Error submitting application");
    }
});
app.get("/api/sponsorshipForm/needs-sponsorship", async (req, res) => {
    try {
        const events = await SponsorshipForm.find({ lookingForSponsors: true });
        if (events.length === 0) {
            return res.status(404).send("No events are currently looking for sponsorship");
        }
        res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching sponsorship events:", error);
        res.status(500).send("Server error while fetching events");
    }
});

app.listen(4000, () => {
    console.log("Server started at 4000");
});
