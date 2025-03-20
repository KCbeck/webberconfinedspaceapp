const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { mitigationsCompleted } = req.body;

    if (mitigationsCompleted) {
        res.json({ permitRequired: true });
    } else {
        res.json({ permitRequired: false });
    }
});

module.exports = router;
