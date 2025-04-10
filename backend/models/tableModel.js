const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
	number: {
		type: Number,
		required: true,
		unique: true,
	},
	seats: {
		type: Number,
		required: true,
	},
	isBooked: {
		type: Boolean,
		default: false,
	},
	bookedBy: {
		type: String,
		default: '',
	},
	bookedAt: {
		type: Date,
	},
});

module.exports = mongoose.model('Table', tableSchema);
