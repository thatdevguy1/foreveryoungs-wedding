const express = require('express');
const router = express.Router();
const Guest = require("../models/guests");

router.get("/api/findGuest", (req, res) => {
    const name = req.query.name;
    console.log(req.query);
    Guest.find({name : name}, (err, guest) => {
        if (err) {
            console.log(err);
            res.status(404);
        };
        console.log(guest)
        res.json(guest);
    });
    //mongoDB query to match name. If not match respond with 404? else respond with 200.
});

router.post("/api/setreservation", (req, res) => {
    const name = req.params.name;
    const reserve = req.params.reserve;
    //mongoDB set the reservation on the name in the DB. 
});

module.exports = router;