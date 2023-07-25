import * as express from 'express';

const db = require('./models/db');

import Thing from './models/things.model';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message : 'Thing microservice'});
})

require('./routes/thing.routes')(app);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

module.exports = app;