const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/', (req, res) => {
    res.send('Working!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
