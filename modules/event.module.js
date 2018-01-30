
const Event = require('../models/event.model.js');


module.exports.findAllEvents = () => {

    return new Promise((resolve, reject) => {
        Event.findAllEvents().then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });

}

module.exports.findEventById = (id) => {
    return new Promise((resolve, reject) => {
        Event.findEventById(id).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}
module.exports.findEventByName = (name) => {
    return new Promise((resolve, reject) => {
        Event.findEventByName(name).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.findEventByDate = (createdAt) => {
    return new Promise((resolve, reject) => {
        Event.findEventByDate(createdAt).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports.createEvent = (event) => {
    return new Promise((resolve, reject) => {
        Event.createEvent(event).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}
module.exports.updateEvent = (event) => {
    return new Promise((resolve, reject) => {
        Event.updateEvent(event).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}



// module.exports.findEventById = (id) => {
//     return new Promise((resolve, reject) => {
//         Event.findEventById(id).then((data) => {
//                 data.views = data.views + 1;
//                 Event.updateEvent(data).then((data) => {
//                     resolve(data);
//                 })
//         }).catch((err) => {
//             reject(err);
//         })
//     })
// }