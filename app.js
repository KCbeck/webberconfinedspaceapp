const express = require('express');
const bodyParser = require('body-parser');
const evaluationRoutes = require('./routes/evaluation');
const permitRoutes = require('./routes/permit');
const trackingRoutes = require('./routes/tracking');
const assessmentRoutes = require('./routes/assessment');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/evaluation', evaluationRoutes);
app.use('/permit', permitRoutes);
app.use('/tracking', trackingRoutes);
app.use('/assessment', assessmentRoutes);

// Start server
const PORT = process.env.PORT || 4000; // Change default port to 4000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
