const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
	tablenumber: {
		type: Number,
		required: true,
		unique: true,
	},
	seats: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ['available', 'booked', 'in service'],
		default: 'available',
	}
}, {
	timestamps: true
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
