let express = require('express');
let morgan = require('morgan');
let cors = require('cors');
const { MongoClient } = require('mongodb');
let stores = require('./stores');

let app = express();
app.use(express.static('uploads'));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
require('dotenv').config();

app.use('/api/users', require('./api/users/router'));

app.listen(process.env.PORT, async () => {
	console.log('Server started!');
	const client = new MongoClient(process.env.MONGO_URL);
	stores.db = client.db(process.env.DATABASE);
	await client.connect();
	console.log('Atlas connected!');
});
