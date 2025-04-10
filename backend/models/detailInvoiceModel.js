const mongoose = require('mongoose');

const detailInvoiceSchema = new mongoose.Schema({
	invoice: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Invoice',
		required: true,
	},
	dish: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dish',
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
		min: 1,
	}
}, {
	timestamps: true
});

const DetailInvoice = mongoose.model('DetailInvoice', detailInvoiceSchema);

module.exports = DetailInvoice;
