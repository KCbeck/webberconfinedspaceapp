const express = require('express');
const router = express.Router();

let employeeLog = [];
let airMonitorReadings = [];

router.post('/entry', (req, res) => {
    const { employeeId } = req.body;
    employeeLog.push({ employeeId, action: 'entry', timestamp: new Date() });
    res.json({ success: true });
});

router.post('/exit', (req, res) => {
    const { employeeId } = req.body;
    employeeLog.push({ employeeId, action: 'exit', timestamp: new Date() });
    res.json({ success: true });
});

router.post('/air-monitor', (req, res) => {
    const { reading } = req.body;
    airMonitorReadings.push({ reading, timestamp: new Date() });
    res.json({ success: true });
});

module.exports = router;
