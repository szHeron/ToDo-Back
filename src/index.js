const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./config/MongoConfig');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(routes);

app.set('port',8000);
app.listen(app.get('port'));