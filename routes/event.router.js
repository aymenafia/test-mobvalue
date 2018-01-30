const express = require('express');
const router = express.Router();
const eventModule = require('../modules/event.module.js');



router.get('/', (req, res) => {

    eventModule.findAllEvents().then((data) => {
        if (data.length == 0) {
            res.status(404);
            res.json({
                "status": 404,
                "message": "there is no events"
            });
            return;
        }
        res.status(200);
        res.json({
            "status": 200,
            "data": data
        });

    }).catch((err) => {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid request"
        });
    })
});

router.get('/:id', (req, res) => {

    let id = req.params.id;

    eventModule.findEventById(id).then((data) => {
        if (data.length == 0) {
            res.status(404);
            res.json({
                "status": 404,
                "message": "there is no events"
            });
            return;
        }
        res.status(200);
        res.json({
            "status": 200,
            "data": data
        });

    }).catch((err) => {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid request"
        });
    })
});



router.post('/', (req, res) => {

    let newEvent = req.body;
    if (newEvent == undefined || newEvent == null) {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid request"
        });
        return;
    }

    eventModule.createEvent(newEvent).then((data) => {
        res.status(200);
        res.json({
            "status": 200,
            "data": data
        });

    }).catch((err) => {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid request"
        });
    })


})

router.put('/', (req, res) => {

    let newEvent = req.body;
    console.log(newEvent);
    if (newEvent == undefined || newEvent == null) {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid request"
        });
        return;
    }

    eventModule.updateEvent(newEvent).then((data) => {
        res.status(200);
        res.json({
            "status": 200,
            "data": data
        });

    }).catch((err) => {
        console.log(err);
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid request"
        });
    })


})




module.exports = router;