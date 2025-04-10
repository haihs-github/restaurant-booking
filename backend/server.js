const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const tableRoutes = require('./routes/tableRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tables', tableRoutes);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('MongoDB connected');
		app.listen(5000, () => console.log('Server running on port 5000'));
	})
	.catch(err => console.log(err));
