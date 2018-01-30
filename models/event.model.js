const mongoose = require('mongoose');
const timeConverter = require('../utils/utils.js').timeConverter;

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cockieId: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    referrer: {
        type: String,
        required: true
    }

});

var Event = module.exports = mongoose.model('Event', eventSchema);

module.exports.findAllEvents = () => {
    return new Promise((resolve, reject) => {
        Event.find({}).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.findEventById = (id) => {
    return new Promise((resolve, reject) => {
        Event.findById(id).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.findEventByName = (name) => {
    return new Promise((resolve, reject) => {
        Event.find({ name: name }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports.findEventByDate = (createdAt) => {
    return new Promise((resolve, reject) => {
        Event.find({ createdAt: createdAt }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports.createEvent = (event) => {
    return new Promise((resolve, reject) => {
        event.createdAt = timeConverter();
        Event.create(event).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.updateEvent = (event) => {
    return new Promise((resolve, reject) => {
        Event.findByIdAndUpdate({ _id: event._id }, event, { new: true }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}








