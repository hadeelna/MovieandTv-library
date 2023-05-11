const express = require('express');
const path = require('path');
const cors = require('cors');

const APIRouter = require('../router/api_router.js');
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', APIRouter);

const port = process.env.port || 9001;
app.listen(port, () => {
    console.log(`Listening on port:
     http://localhost:${port}`)
});


