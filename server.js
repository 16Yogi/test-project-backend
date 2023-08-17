let express = require('express');
let morgan = require('morgan');
let cors = require('cors');
const mongoose = require('mongoose');
let stores = require('./stores');

let app = express();
app.use(express.static('uploads'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
require('dotenv').config();

app.use('/api/users', require('./api/users/router'));

app.all('*', (req, res) => {
  return res.status(405).json({ message: 'route not found' });
});

app.listen(process.env.PORT, async () => {
  console.log('Server started!');
  let client = await mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DATABASE,
  });
  stores.db = client.connection;
  console.log('Atlas connected!');
});
