const express = require('express');
const router = express.Router();
const Guest = require("../models/guests");
const { isCompositeComponent } = require('react-dom/test-utils');

//mongoDB query to match name. If not match respond with 500 else respond with 200.
router.get("/api/findGuest", (req, res) => {
    const name = req.query.name;
    console.log(req.query);
    if(req.query.name !== "plus 1"){
        Guest.findOne({name : {$regex : new RegExp(name, "i")}}, (err, guest) => {
            if (err) {
                console.log(err);
                //500 might not be the right code **look into this.
                res.status(500);
            };
            if(guest){
                Guest.find({group: guest.group}, (err, guests) => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                    }
                    console.log("guests found: ", guests);
                    res.send(guests);
                });
            } else {
                res.send([]);
            }
        });
    } else {
        res.send([]);
    };
});

//mongoDB set the reservation on the name in the DB. 
router.post("/api/setReservation", (req, res) => {
    let responseGuestArray = {data: []};
    req.body.guests.forEach(({name, attending, group}) => {
        Guest.updateOne({ name: name, group: group}, { attending: attending }, (err, guest) => {
            console.log(`req body name and attending are ${name} and ${attending}`);
            if(err){
                console.log(err);
                res.status(500);
            };
            responseGuestArray.data.push(guest);
        });
    });
    console.log(JSON.stringify(responseGuestArray));
    res.send(responseGuestArray);
});

module.exports = router;