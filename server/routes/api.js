const express = require('express');
const router = express.Router();
const Guest = require("../models/guests");
const { isCompositeComponent } = require('react-dom/test-utils');

//mongoDB query to match name. If not match respond with 500 else respond with 200.
router.get("/api/findGuest", (req, res) => {
    const name = req.query.name;
    console.log(req.query);
    Guest.find({name : name}, (err, guest) => {
        if (err) {
            console.log(err);
            //500 might not be the right code **look into this.
            res.status(500);
        };
        console.log(guest)
        res.json(guest);
    });
});

//mongoDB set the reservation on the name in the DB. 
router.post("/api/setReservation", (req, res) => {
    let responseGuestArray = {data: []};
    req.body.guests.forEach(({name, attending}) => {
        Guest.updateOne({ name: name }, { attending: attending }, (err, guest) => {
            console.log(`req body name and attending are ${name} and ${attending}`);
            if(err){
                console.log(err);
                res.status(500);
            };
            responseGuestArray.data.push(guest);
        });
    });
    res.send(responseGuestArray);
});

module.exports = router;