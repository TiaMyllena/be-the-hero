const express = require('express');
const cors = require('cors');
const routs = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routs);


app.listen(3333);