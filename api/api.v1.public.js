var express = require('express');
var router = express.Router();


const eventRouter = require('../routes/event.router.js');
const dashboardRouter = require('../routes/dashboard.router.js');

router.use('/events', eventRouter);
router.use('/dashboard', dashboardRouter);

module.exports = router;