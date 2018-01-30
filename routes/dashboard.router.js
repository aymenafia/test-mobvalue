
const express = require('express');
const router = express.Router();
const eventModule = require('../modules/event.module.js');



router.get('/', (req, res) => {
    let result = [];
    eventByName().then((eventByNameResult) => {
        result.push(eventByNameResult);
        eventByDate().then((eventByDateResult) => {
            result.push(eventByDateResult);
            res.status(200);
            res.send({
                "stat": {
                    "occurence_by_name": eventByNameResult,
                    "occurence_by_date": eventByDateResult
                }
            });

        })
    })


});


function eventByName() {
    return new Promise((resolve, reject) => {
        let resultByName = {};
        let events = [];
        eventModule.findAllEvents().then((data) => {
            events = data;
            for (let i = 0; i < events.length; i++) {
                eventModule.findEventByName(events[i].name).then((data) => {
                    if (Array.isArray(data)) { resultByName[events[i].name] = data.length; }
                    else { resultByName[events[i].name] = resultByName[events[i].name] + 1; }
                    if (i == events.length - 1) { resolve(resultByName); }
                });

            }
        });

    })
}

function eventByDate() {
    return new Promise((resolve, reject) => {
        let resultByDate = {};
        let events = [];
        let counter = 0;

        eventModule.findAllEvents().then((data) => {
            events = data;

            console.log('loading...')
            for (let i = 0; i < events.length; i++) {

                eventModule.findEventByDate(events[i].createdAt).then((data) => {
                    resultByDate[events[i].createdAt] = data;
                    console.log('asynch ' + i);
                    //waiting for asynch
                    counter = counter + 1;
                    if (counter == events.length) { console.log('done'); resolve(resultByDate); }
                });
                console.log('out of asynch ' + i);

            }
        });

    })
}





module.exports = router;