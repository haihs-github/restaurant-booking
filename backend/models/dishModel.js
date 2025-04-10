const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		default: '',
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	}
}, {
	timestamps: true
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
