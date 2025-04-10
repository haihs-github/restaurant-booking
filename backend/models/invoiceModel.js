const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
	customerName: {
		type: String,
		required: true,
		trim: true,
	},
	customerPhoneNumber: {
		type: String,
		required: true,
		trim: true,
	},
	customerEmail: {
		type: String,
		required: true,
		trim: true,
	},
	table: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Table',
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	startTime: {
		type: String,
		required: true,
	},
	endTime: {
		type: String,
		required: true,
	},
	isPay: {
		type: Boolean,
		default: false,
	}
}, {
	timestamps: true
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
