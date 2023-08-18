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

mongoose.connect('mongodb+srv://Xmr-78:9669@cluster0.qvluro9.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("connected")).catch(()=>console.log("no connected"))
app.listen(5000, async () => {
  console.log('Server started! at http://localhost:5000');

});
