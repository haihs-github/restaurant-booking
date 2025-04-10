const mongoose = require('mongoose');

const manageSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
	}
}, {
	timestamps: true
});

const Manage = mongoose.model('Manage', manageSchema);

module.exports = Manage;
