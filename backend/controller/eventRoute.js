const express = require("express");
const userSchema = require("../model/userSchema");
const eventSchema = require("../model/eventSchema");
const feedbackSchema = require("../model/feedbackSchema");
const sponsorshipSchema = require("../model/sponsorshipSchema");
const eventRoute = express.Router();
const mongoose = require("mongoose");

// --------------------------------------------------------------------------------
// User
eventRoute.get("/user-list", (req,res) => {
    userSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.post("/create-user", (req,res) => {
    userSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.route("/check-user/:uname")
.get((req, res) => {
    userSchema.findOne({username: req.params.uname}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);

    })
})

eventRoute.route("/update-user/:id")
.get((req, res) => {
    userSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req, res) => {
    userSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.delete("/delete-user/:id",(req,res)=>{
    userSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


// -----------------------------------------------------------------------------------------
// Events
eventRoute.get("/event-list", (req,res) => {
    eventSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.route("/check-event/:id")
.get((req, res) => {
    eventSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.post("/create-event", (req,res) => {
    eventSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.route("/update-event/:id")
.get((req, res) => {
    eventSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req, res) => {
    eventSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.delete("/delete-event/:id",(req,res)=>{
    eventSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.get("/sponsor-list", (req, res) => {
    sponsorshipSchema.find({ lookingToSponsor: true }, (err, data) => {
        if (err) {
            console.error("Error fetching sponsors:", err);
            res.status(500).json({ message: "Failed to fetch sponsors" });
        } else {
            res.status(200).json(data);
        }
    });
});
// Sponsorship
eventRoute.post("/sponsorship", (req, res) => {
    sponsorshipSchema.create(req.body, (err, data) => {
        if (err) {
            console.error("Sponsorship submission error:", err);
            res.status(500).json({ message: "Failed to submit sponsorship application" });
        } else {
            res.status(200).json({ message: "Sponsorship application submitted successfully", data });
        }
    });
});



// Feedback
eventRoute.post("/post-feedback", (req,res) => {
    feedbackSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = eventRoute;